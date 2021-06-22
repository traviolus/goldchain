package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/traviolus/goldchain/x/goldchain/types"
	"unsafe"
)

var (
	GoldPrice = uint64(18)
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

func (k Keeper) GetAccountGold(ctx sdk.Context, account sdk.AccAddress) uint64 {
	goldAmountByte := ctx.KVStore(k.storeKey).Get(account.Bytes())
	goldAmountInteger := ByteArrayToInt(goldAmountByte)
	return goldAmountInteger
}

func (k Keeper) CreateBuyOrder(ctx sdk.Context, buyer sdk.AccAddress, amount sdk.Coins) error {
	currentToken := k.bankKeeper.GetAllBalances(ctx, buyer)
	buyAmount := amount.AmountOf("token").Uint64()
	if buyAmount > currentToken.AmountOf("token").Uint64() {
		return sdkerrors.Wrapf(types.ErrInsufficientFunds, "MsgBuyGold: Insufficient Funds.")
	}
	goldAmount := buyAmount / GoldPrice
	netPrice := goldAmount * GoldPrice
	currentGold := ctx.KVStore(k.storeKey).Get(buyer.Bytes())
	newGoldAmount := ByteArrayToInt(currentGold) + goldAmount
	ctx.KVStore(k.storeKey).Set(buyer.Bytes(), IntToByteArray(newGoldAmount))
	err := k.bankKeeper.SendCoinsFromAccountToModule(ctx, buyer, types.ModuleName, sdk.NewCoins(sdk.NewCoin("token", sdk.NewIntFromUint64(netPrice))))
	if err != nil {
		return err
	}
	return nil
}

func (k Keeper) CreateSellOrder(ctx sdk.Context, seller sdk.AccAddress, sellAmount uint64) error {
	currentGold := ByteArrayToInt(ctx.KVStore(k.storeKey).Get(seller.Bytes()))
	if sellAmount > currentGold {
		return sdkerrors.Wrapf(types.ErrInsufficientGold, "MsgSellGold: Insufficient Gold.")
	}
	newGoldAmount := currentGold - sellAmount
	ctx.KVStore(k.storeKey).Set(seller.Bytes(), IntToByteArray(newGoldAmount))
	sellPrice := sellAmount * GoldPrice
	err := k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, seller, sdk.NewCoins(sdk.NewCoin("token", sdk.NewIntFromUint64(sellPrice))))
	if err != nil {
		return err
	}
	return nil
}
