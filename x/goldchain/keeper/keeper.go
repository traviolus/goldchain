package keeper

import (
	"fmt"
	decoder "github.com/bandprotocol/chain/v2/pkg/obi"
	oracletypes "github.com/bandprotocol/chain/v2/x/oracle/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	authkeeper "github.com/cosmos/cosmos-sdk/x/auth/keeper"
	bankkeeper "github.com/cosmos/cosmos-sdk/x/bank/keeper"
	capabilitykeeper "github.com/cosmos/cosmos-sdk/x/capability/keeper"
	capabilitytypes "github.com/cosmos/cosmos-sdk/x/capability/types"
	types2 "github.com/cosmos/cosmos-sdk/x/ibc/applications/transfer/types"
	portkeeper "github.com/cosmos/cosmos-sdk/x/ibc/core/05-port/keeper"
	host "github.com/cosmos/cosmos-sdk/x/ibc/core/24-host"
	"github.com/tendermint/tendermint/libs/log"

	"github.com/cosmos/cosmos-sdk/codec"
	sdk "github.com/cosmos/cosmos-sdk/types"
	gogotypes "github.com/gogo/protobuf/types"
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

		bankKeeper		bankkeeper.Keeper
		authKeeper  	authkeeper.AccountKeeper
		channelKeeper	types2.ChannelKeeper
		scopedKeeper	capabilitykeeper.ScopedKeeper
		portKeeper		portkeeper.Keeper
	}
)

func NewKeeper(
	cdc 			codec.Marshaler,
	storeKey,
	memKey 			sdk.StoreKey,
	bankKeeper 		bankkeeper.Keeper,
	authKeeper 		authkeeper.AccountKeeper,
	channelKeeper 	types2.ChannelKeeper,
	scopedKeeper	capabilitykeeper.ScopedKeeper,
	portKeeper 		portkeeper.Keeper,
	// this line is used by starport scaffolding # ibc/keeper/parameter
) *Keeper {
	return &Keeper{
		cdc:      cdc,
		storeKey: storeKey,
		memKey:   memKey,
		bankKeeper: bankKeeper,
		authKeeper: authKeeper,
		channelKeeper: channelKeeper,
		scopedKeeper: scopedKeeper,
		portKeeper: portKeeper,
		// this line is used by starport scaffolding # ibc/keeper/return
	}
}

type ResultData struct {
	Price int64  `obi:"price"`
}

func (k Keeper) Logger(ctx sdk.Context) log.Logger {
	return ctx.Logger().With("module", fmt.Sprintf("x/%s", types.ModuleName))
}

func (k Keeper) ClaimCapability(ctx sdk.Context, cap *capabilitytypes.Capability, name string) error {
	return k.scopedKeeper.ClaimCapability(ctx, cap, name)
}

func (k Keeper) BindPort(ctx sdk.Context, portID string) error {
	fmt.Println(portID)
	capability := k.portKeeper.BindPort(ctx, portID)
	return k.ClaimCapability(ctx, capability, host.PortPath(portID))
}

func (k Keeper) AuthenticateCapability(ctx sdk.Context, cap *capabilitytypes.Capability, name string) bool {
	return k.scopedKeeper.AuthenticateCapability(ctx, cap, name)
}

func (k Keeper) SetResult(ctx sdk.Context, requestID oracletypes.RequestID, result []byte) {
	var resultStruct ResultData
	decoder.MustDecode(result, &resultStruct)
	latestPrice := Int64ToBytes(resultStruct.Price)
	store := ctx.KVStore(k.storeKey)
	store.Set(types.ResultStoreKey(requestID), latestPrice)
	store.Set([]byte("latestgoldprice"), latestPrice)
}

func (k Keeper) SetLatestRequestID(ctx sdk.Context, id oracletypes.RequestID) {
	ctx.KVStore(k.storeKey).Set(types.LatestRequestIDKey, k.cdc.MustMarshalBinaryLengthPrefixed(&gogotypes.Int64Value{Value: int64(id)}))
}

func (k Keeper) GetResult(ctx sdk.Context, requestID oracletypes.RequestID) ([]byte, error) {
	if !k.HasResult(ctx, requestID) {
		return nil, sdkerrors.Wrapf(types.ErrItemNotFound,
			"GetResult: Result for request ID %d is not available.", requestID,
		)
	}
	store := ctx.KVStore(k.storeKey)
	return store.Get(types.ResultStoreKey(requestID)), nil
}

func (k Keeper) HasResult(ctx sdk.Context, requestID oracletypes.RequestID) bool {
	store := ctx.KVStore(k.storeKey)
	return store.Has(types.ResultStoreKey(requestID))
}

func (k Keeper) GetLatestRequestID(ctx sdk.Context) int64 {
	bz := ctx.KVStore(k.storeKey).Get(types.LatestRequestIDKey)
	intV := gogotypes.Int64Value{}
	k.cdc.MustUnmarshalBinaryLengthPrefixed(bz, &intV)
	return intV.GetValue()
}

func (k Keeper) GetLatestResult(ctx sdk.Context) int64 {
	store := ctx.KVStore(k.storeKey)
	return BytesToInt64(store.Get([]byte("latestgoldprice")))
}

func (k Keeper) MintCoins(ctx sdk.Context) {
	k.bankKeeper.MintCoins(ctx, types.ModuleName, sdk.NewCoins(sdk.NewCoin("token", sdk.NewInt(10000))))
}
