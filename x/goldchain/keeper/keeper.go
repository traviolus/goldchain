package keeper

import (
	"fmt"
	authkeeper "github.com/cosmos/cosmos-sdk/x/auth/keeper"
	bankkeeper "github.com/cosmos/cosmos-sdk/x/bank/keeper"
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

		bankKeeper	bankkeeper.Keeper
		authKeeper  authkeeper.AccountKeeper
	}
)

func NewKeeper(
	cdc codec.Marshaler,
	storeKey,
	memKey sdk.StoreKey,
	bankKeeper bankkeeper.Keeper,
	authKeeper authkeeper.AccountKeeper,
	// this line is used by starport scaffolding # ibc/keeper/parameter
) *Keeper {
	return &Keeper{
		cdc:      cdc,
		storeKey: storeKey,
		memKey:   memKey,
		bankKeeper: bankKeeper,
		authKeeper: authKeeper,
		// this line is used by starport scaffolding # ibc/keeper/return
	}
}

func (k Keeper) Logger(ctx sdk.Context) log.Logger {
	return ctx.Logger().With("module", fmt.Sprintf("x/%s", types.ModuleName))
}

//func (k Keeper) CreateModuleAccount(ctx sdk.Context) {
//	_ = k.authKeeper.GetModuleAccount(ctx, types.ModuleName)
//}
