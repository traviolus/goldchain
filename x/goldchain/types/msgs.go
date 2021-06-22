package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var (
	_ sdk.Msg = &MsgBuyGold{}
	_ sdk.Msg = &MsgSellGold{}
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
