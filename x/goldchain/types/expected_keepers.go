package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	authtypes "github.com/cosmos/cosmos-sdk/x/auth/types"
)

type BankKeeper interface {
	SendCoinsFromAccountToModule(ctx sdk.Context, senderAddr sdk.AccAddress, recipientModule string, amt sdk.Coins) error
	GetAllBalances(ctx sdk.Context, addr sdk.AccAddress) sdk.Coins
	SetBalance(ctx sdk.Context, addr sdk.AccAddress, coin sdk.Coin) error
	GetBalance(ctx sdk.Context, addr sdk.AccAddress, denom string) sdk.Coin
}

type AccountKeeper interface {
	SetModuleAccount(ctx sdk.Context, macc authtypes.ModuleAccountI)
	GetModuleAccount(ctx sdk.Context, name string) authtypes.ModuleAccountI
	SetAccount(ctx sdk.Context, acc authtypes.AccountI)
}
