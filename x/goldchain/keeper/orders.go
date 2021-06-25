package keeper

import (
	"encoding/binary"
	"encoding/hex"
	"fmt"
	bandoracle "github.com/bandprotocol/chain/v2/x/oracle/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	clienttypes "github.com/cosmos/cosmos-sdk/x/ibc/core/02-client/types"
	channeltypes "github.com/cosmos/cosmos-sdk/x/ibc/core/04-channel/types"
	host "github.com/cosmos/cosmos-sdk/x/ibc/core/24-host"
	"github.com/traviolus/goldchain/x/goldchain/types"
	"time"
	"unsafe"
)

func IntToByteArray(num uint64) []byte {
	size := int(unsafe.Sizeof(num))
	arr := make([]byte, size)
	for i := 0; i < size; i++ {
		byt := *(*uint8)(unsafe.Pointer(uintptr(unsafe.Pointer(&num)) + uintptr(i)))
		arr[i] = byt
	}
	return arr
}

func ByteArrayToInt(arr []byte) uint64 {
	val := uint64(0)
	size := len(arr)
	for i := 0; i < size; i++ {
		*(*uint8)(unsafe.Pointer(uintptr(unsafe.Pointer(&val)) + uintptr(i))) = arr[i]
	}
	return val
}

func Int64ToBytes(i int64) []byte {
	var buf = make([]byte, 8)
	binary.BigEndian.PutUint64(buf, uint64(i))
	return buf
}


func BytesToInt64(buf []byte) int64 {
	return int64(binary.BigEndian.Uint64(buf))
}

func (k Keeper) GetAccountGold(ctx sdk.Context, account sdk.AccAddress) uint64 {
	goldAmountByte := ctx.KVStore(k.storeKey).Get(account.Bytes())
	goldAmountInteger := ByteArrayToInt(goldAmountByte)
	return goldAmountInteger
}

func (k Keeper) CreateBuyOrder(ctx sdk.Context, buyer sdk.AccAddress, amount sdk.Coins) error {
	currentGoldPrice := k.GetLatestResult(ctx)
	fmt.Println("BUYING WITH GOLD PRICE: ", currentGoldPrice)
	var buyAmount, goldAmount, netPrice, newGoldAmount int64
	switch amount.GetDenomByIndex(0) {
	case "token":
		buyAmount = amount.AmountOf("token").Int64()
		goldAmount = int64(float64(buyAmount) / float64(currentGoldPrice) / float64(1000000))
		netPrice = goldAmount * currentGoldPrice/1000000
	case "gold":
		goldAmount = amount.AmountOf("gold").Int64()
		buyAmount = goldAmount * currentGoldPrice/1000000
		netPrice = buyAmount
	default:
		return sdkerrors.Wrapf(types.ErrInvalidDenom, "MsgBuyGold: Invalid Denominator [token|gold]")
	}
	currentToken := k.bankKeeper.GetAllBalances(ctx, buyer)
	if buyAmount > currentToken.AmountOf("token").Int64() {
		return sdkerrors.Wrapf(types.ErrInsufficientFunds, "MsgBuyGold: Insufficient Funds.")
	}
	currentGold := ctx.KVStore(k.storeKey).Get(buyer.Bytes())
	if len(currentGold) > 0 {
		newGoldAmount = BytesToInt64(currentGold) + goldAmount
	} else {
		newGoldAmount = goldAmount
	}
	ctx.KVStore(k.storeKey).Set(buyer.Bytes(), Int64ToBytes(newGoldAmount))
	err := k.bankKeeper.SendCoinsFromAccountToModule(ctx, buyer, types.ModuleName, sdk.NewCoins(sdk.NewCoin("token", sdk.NewInt(netPrice))))
	if err != nil {
		return err
	}
	return nil
}

func (k Keeper) CreateSellOrder(ctx sdk.Context, seller sdk.AccAddress, sellAmount uint64) error {
	currentGoldPrice := k.GetLatestResult(ctx)
	fmt.Println("SELLING WITH GOLD PRICE: ", currentGoldPrice)
	currentGold := ByteArrayToInt(ctx.KVStore(k.storeKey).Get(seller.Bytes()))
	if sellAmount > currentGold {
		return sdkerrors.Wrapf(types.ErrInsufficientGold, "MsgSellGold: Insufficient Gold.")
	}
	newGoldAmount := currentGold - sellAmount
	ctx.KVStore(k.storeKey).Set(seller.Bytes(), IntToByteArray(newGoldAmount))
	sellPrice := (sellAmount * uint64(currentGoldPrice))/uint64(1000000)
	err := k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, seller, sdk.NewCoins(sdk.NewCoin("token", sdk.NewIntFromUint64(sellPrice))))
	if err != nil {
		return err
	}
	return nil
}

func (k Keeper) FetchGoldPrice(ctx sdk.Context) {
	calldata, _ :=  hex.DecodeString("00000000000f4240")
	sourceChannel := "channel-0"
	sourceChannelEnd, _ := k.channelKeeper.GetChannel(ctx, "goldchain", sourceChannel)
	destinationPort := sourceChannelEnd.Counterparty.PortId
	destinationChannel := sourceChannelEnd.Counterparty.ChannelId
	sequence, _ := k.channelKeeper.GetNextSequenceSend(
		ctx, "goldchain", sourceChannel,
	)
	sourcePort := "goldchain"
	packet := bandoracle.NewOracleRequestPacketData(
		"goldchain-01",
		bandoracle.OracleScriptID(33),
		calldata,
		uint64(10),
		uint64(8),
		sdk.Coins{},
		"",
		uint64(50000),
		uint64(1000000),
	)
	channelCap, _ := k.scopedKeeper.GetCapability(ctx, host.ChannelCapabilityPath(sourcePort, sourceChannel))
	k.channelKeeper.SendPacket(ctx, channelCap, channeltypes.NewPacket(
		packet.GetBytes(),
		sequence,
		sourcePort,
		sourceChannel,
		destinationPort,
		destinationChannel,
		clienttypes.NewHeight(0, 0),
		uint64(ctx.BlockTime().UnixNano()+int64(20*time.Minute)), // Arbitrarily high timeout for now
	))
}
