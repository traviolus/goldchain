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

func (k Keeper) CreateOrder(ctx sdk.Context, buyer sdk.AccAddress, amount sdk.Coins) error {
	currentToken := k.bankKeeper.GetAllBalances(ctx, buyer)
	buyAmount := amount.AmountOf("token").Uint64()
	if buyAmount > currentToken.AmountOf("token").Uint64() {
		return sdkerrors.Wrapf(types.ErrInsufficientFunds, "MsgBuyGold: Insufficient Funds.")
	}
	goldAmount := buyAmount / GoldPrice
	currentGold := ctx.KVStore(k.storeKey).Get(buyer.Bytes())
	newGoldAmount := ByteArrayToInt(currentGold) + goldAmount
	ctx.KVStore(k.storeKey).Set(buyer.Bytes(), IntToByteArray(newGoldAmount))
	err := k.bankKeeper.SendCoinsFromAccountToModule(ctx, buyer, types.ModuleName, amount)
	if err != nil {
		return err
	}
	return nil
}
