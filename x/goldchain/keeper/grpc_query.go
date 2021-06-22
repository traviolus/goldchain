package keeper

import (
	"context"
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
