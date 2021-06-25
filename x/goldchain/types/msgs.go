package types

import (
	bandoracle "github.com/bandprotocol/chain/v2/x/oracle/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var (
	_ sdk.Msg = &MsgBuyGold{}
	_ sdk.Msg = &MsgSellGold{}
	_ sdk.Msg = &MsgRequestData{}
)

func NewMsgBuyGold(buyer sdk.AccAddress, amount sdk.Coins) *MsgBuyGold {
	return &MsgBuyGold{BuyerAddress: buyer.String(), Amount: amount}
}

func (MsgBuyGold) Route() string { return RouterKey }

func (msg MsgBuyGold) Type() string { return "buy_gold" }

func (msg MsgBuyGold) ValidateBasic() error {
	buyer, err := sdk.AccAddressFromBech32(msg.BuyerAddress)
	if err != nil {
		return err
	}
	if err := sdk.VerifyAddressFormat(buyer); err != nil {
		return sdkerrors.Wrapf(ErrInvalidAddress, "sender: %s", msg.BuyerAddress)
	}
	if msg.Amount.Empty() {
		return sdkerrors.Wrapf(ErrInvalidBasicMsg, "MsgBuyGold: Specified amount is invalid.")
	}
	return nil
}

func (msg MsgBuyGold) GetSigners() []sdk.AccAddress {
	sender, _ := sdk.AccAddressFromBech32(msg.BuyerAddress)
	return []sdk.AccAddress{sender}
}

func (msg MsgBuyGold) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(&msg)
	return sdk.MustSortJSON(bz)
}

func NewMsgSellGold(seller sdk.AccAddress, amount uint64) *MsgSellGold {
	return &MsgSellGold{SellerAddress: seller.String(), Amount: amount}
}

func (MsgSellGold) Route() string { return RouterKey }

func (msg MsgSellGold) Type() string { return "sell_gold" }

func (msg MsgSellGold) ValidateBasic() error {
	seller, err := sdk.AccAddressFromBech32(msg.SellerAddress)
	if err != nil {
		return err
	}
	if err := sdk.VerifyAddressFormat(seller); err != nil {
		return sdkerrors.Wrapf(ErrInvalidAddress, "sender: %s", msg.SellerAddress)
	}
	if msg.Amount < uint64(1) {
		return sdkerrors.Wrapf(ErrInvalidSellAmount, "MsgSellGold: Specified amount is invalid.")
	}
	return nil
}

func (msg MsgSellGold) GetSigners() []sdk.AccAddress {
	sender, _ := sdk.AccAddressFromBech32(msg.SellerAddress)
	return []sdk.AccAddress{sender}
}

func (msg MsgSellGold) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(&msg)
	return sdk.MustSortJSON(bz)
}

func NewMsgRequestData(
	oracleScriptID bandoracle.OracleScriptID,
	sourceChannel string,
	calldata []byte,
	askCount uint64,
	minCount uint64,
	feeLimit sdk.Coins,
	requestKey string,
	prepareGas uint64,
	executeGas uint64,
	sender sdk.AccAddress,
) *MsgRequestData {
	return &MsgRequestData{
		OracleScriptID: int64(oracleScriptID),
		SourceChannel:  sourceChannel,
		Calldata:       calldata,
		AskCount:       askCount,
		MinCount:       minCount,
		FeeLimit:       feeLimit,
		RequestKey:     requestKey,
		PrepareGas:     prepareGas,
		ExecuteGas:     executeGas,
		Sender:         sender.String(),
	}
}

func (msg MsgRequestData) Route() string { return RouterKey }

func (msg MsgRequestData) Type() string { return "goldchain" }

func (msg MsgRequestData) ValidateBasic() error {
	sender, err := sdk.AccAddressFromBech32(msg.Sender)
	if err != nil {
		return err
	}
	if sender.Empty() {
		return sdkerrors.Wrapf(ErrInvalidBasicMsg, "MsgRequestData: Sender address must not be empty.")
	}
	if msg.OracleScriptID <= 0 {
		return sdkerrors.Wrapf(ErrInvalidBasicMsg, "MsgRequestData: Oracle script id (%d) must be positive.", msg.OracleScriptID)
	}
	if msg.AskCount <= 0 {
		return sdkerrors.Wrapf(ErrInvalidBasicMsg,
			"MsgRequestData: Sufficient validator count (%d) must be positive.",
			msg.AskCount,
		)
	}
	if msg.AskCount < msg.MinCount {
		return sdkerrors.Wrapf(ErrInvalidBasicMsg,
			"MsgRequestData: Request validator count (%d) must not be less than sufficient validator count (%d).",
			msg.AskCount,
			msg.MinCount,
		)
	}
	return nil
}

func (msg MsgRequestData) GetSigners() []sdk.AccAddress {
	sender, err := sdk.AccAddressFromBech32(msg.Sender)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{sender}
}

func (msg MsgRequestData) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(&msg)
	return sdk.MustSortJSON(bz)
}
