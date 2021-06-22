package keeper

import (
	"fmt"
	"github.com/tendermint/tendermint/libs/log"

	"github.com/cosmos/cosmos-sdk/codec"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/traviolus/goldchain/x/goldchain/types"
	// this line is used by starport scaffolding # ibc/keeper/import
)

type (
	Keeper struct {
		cdc      			codec.Marshaler
		storeKey 			sdk.StoreKey
		memKey   			sdk.StoreKey
		moduleAccountName	string
		// this line is used by starport scaffolding # ibc/keeper/attribute

		bankKeeper	types.BankKeeper
		authKeeper  types.AccountKeeper
	}
)

func NewKeeper(
	cdc codec.Marshaler,
	storeKey,
	memKey sdk.StoreKey,
	// this line is used by starport scaffolding # ibc/keeper/parameter
) Keeper {
	return Keeper{
		cdc:      cdc,
		storeKey: storeKey,
		memKey:   memKey,
		// this line is used by starport scaffolding # ibc/keeper/return
	}
}

func (k Keeper) Logger(ctx sdk.Context) log.Logger {
	return ctx.Logger().With("module", fmt.Sprintf("x/%s", types.ModuleName))
}

//func (k Keeper) CreateModuleAccount(ctx sdk.Context) {
//	_ = k.authKeeper.GetModuleAccount(ctx, types.ModuleName)
//}
