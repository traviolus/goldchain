package keeper

import (
	"context"
	bandoracle "github.com/bandprotocol/chain/v2/x/oracle/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/traviolus/goldchain/x/goldchain/types"
)

type Querier struct {
	Keeper
}

var _ types.QueryServer = Querier{}

func (k Querier) GoldAmount(c context.Context, req *types.QueryAccountGoldRequest) (*types.QueryAccountGoldResponse, error) {
	ctx := sdk.UnwrapSDKContext(c)
	acc, err := sdk.AccAddressFromBech32(req.AccountAddress)
	if err != nil {
		return nil, err
	}

	amount := k.GetAccountGold(ctx, acc)
	return &types.QueryAccountGoldResponse{Amount: amount}, nil
}

func (q Keeper) Result(c context.Context, req *types.QueryResultRequest) (*types.QueryResultResponse, error) {
	ctx := sdk.UnwrapSDKContext(c)
	bz, err := q.GetResult(ctx, bandoracle.RequestID(req.RequestId))
	if err != nil {
		return nil, err
	}
	result := BytesToInt64(bz)
	return &types.QueryResultResponse{Result: result}, nil
}

func (q Keeper) LatestRequestID(c context.Context, req *types.QueryLatestRequestIDRequest) (*types.QueryLatestRequestIDResponse, error) {
	ctx := sdk.UnwrapSDKContext(c)
	id := q.GetLatestRequestID(ctx)
	return &types.QueryLatestRequestIDResponse{RequestId: id}, nil
}

func (q Keeper) LatestGoldPrice(c context.Context, req *types.QueryLatestGoldPriceRequest) (*types.QueryLatestGoldPriceResponse, error) {
	ctx := sdk.UnwrapSDKContext(c)
	price := q.GetLatestResult(ctx)
	return &types.QueryLatestGoldPriceResponse{Price: price}, nil
}
