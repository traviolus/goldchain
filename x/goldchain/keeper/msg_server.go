package keeper

import (
	"context"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/traviolus/goldchain/x/goldchain/types"
)

type msgServer struct {
	Keeper
}

// NewMsgServerImpl returns an implementation of the MsgServer interface
// for the provided Keeper.
func NewMsgServerImpl(keeper Keeper) types.MsgServer {
	return &msgServer{Keeper: keeper}
}

var _ types.MsgServer = msgServer{}

func (k msgServer) BuyGold(goCtx context.Context, msg *types.MsgBuyGold) (*types.MsgBuyGoldResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	buyer, err := sdk.AccAddressFromBech32(msg.BuyerAddress)
	if err != nil {
		return nil, err
	}

	err = k.Keeper.CreateBuyOrder(ctx, buyer, msg.Amount)
	if err != nil {
		return nil, err
	}

	return &types.MsgBuyGoldResponse{}, nil
}

func (k msgServer) SellGold(goCtx context.Context, msg *types.MsgSellGold) (*types.MsgSellGoldResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	seller, err := sdk.AccAddressFromBech32(msg.SellerAddress)
	if err != nil {
		return nil, err
	}

	err = k.Keeper.CreateSellOrder(ctx, seller, msg.Amount)
	if err != nil {
		return nil, err
	}

	return &types.MsgSellGoldResponse{}, nil
}
