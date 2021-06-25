package keeper

import (
	"context"
	bandtypes "github.com/bandprotocol/chain/v2/x/oracle/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	clienttypes "github.com/cosmos/cosmos-sdk/x/ibc/core/02-client/types"
	channeltypes "github.com/cosmos/cosmos-sdk/x/ibc/core/04-channel/types"
	host "github.com/cosmos/cosmos-sdk/x/ibc/core/24-host"
	"github.com/traviolus/goldchain/x/goldchain/types"
	"time"
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

func (k msgServer) RequestData(goCtx context.Context, msg *types.MsgRequestData) (*types.MsgRequestDataResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	sourceChannelEnd, found := k.channelKeeper.GetChannel(ctx, "goldchain", msg.SourceChannel)
	if !found {
		return nil, sdkerrors.Wrapf(
			sdkerrors.ErrUnknownRequest,
			"unknown channel %s port consuming",
			msg.SourceChannel,
		)
	}
	destinationPort := sourceChannelEnd.Counterparty.PortId
	destinationChannel := sourceChannelEnd.Counterparty.ChannelId
	sequence, found := k.channelKeeper.GetNextSequenceSend(
		ctx, "goldchain", msg.SourceChannel,
	)
	if !found {
		return nil, sdkerrors.Wrapf(
			sdkerrors.ErrUnknownRequest,
			"unknown sequence number for channel %s port oracle",
			msg.SourceChannel,
		)
	}
	sourcePort := "goldchain"
	packet := bandtypes.NewOracleRequestPacketData(
		"goldchain-01",
		bandtypes.OracleScriptID(msg.OracleScriptID),
		msg.Calldata,
		msg.AskCount,
		msg.MinCount,
		msg.FeeLimit,
		msg.RequestKey,
		msg.PrepareGas,
		msg.ExecuteGas,
	)
	channelCap, ok := k.scopedKeeper.GetCapability(ctx, host.ChannelCapabilityPath(sourcePort, msg.SourceChannel))
	if !ok {
		return nil, sdkerrors.Wrap(channeltypes.ErrChannelCapabilityNotFound, "module does not own channel capability")
	}
	err := k.channelKeeper.SendPacket(ctx, channelCap, channeltypes.NewPacket(
		packet.GetBytes(),
		sequence,
		sourcePort,
		msg.SourceChannel,
		destinationPort,
		destinationChannel,
		clienttypes.NewHeight(0, 0),
		uint64(ctx.BlockTime().UnixNano()+int64(20*time.Minute)), // Arbitrarily high timeout for now
	))
	if err != nil {
		return nil, err
	}
	return &types.MsgRequestDataResponse{}, nil
}
