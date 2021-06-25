package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/goldchain module sentinel errors
var (
	ErrSample = sdkerrors.Register(ModuleName, 1100, "sample error")
	// this line is used by starport scaffolding # ibc/errors
	ErrInvalidBasicMsg   = sdkerrors.Register(ModuleName, 1, "InvalidBasicMsg")
	ErrInvalidAddress    = sdkerrors.Register(ModuleName, 2, "InvalidAdrress")
	ErrInsufficientFunds = sdkerrors.Register(ModuleName, 3, "InsufficientFunds")
	ErrInvalidSellAmount = sdkerrors.Register(ModuleName, 4, "InvalidSellAmount")
	ErrInsufficientGold  = sdkerrors.Register(ModuleName, 5, "InsufficientGold")
	ErrInvalidDenom		 = sdkerrors.Register(ModuleName, 6, "InvalidDenominator")
	ErrInvalidVersion    = sdkerrors.Register(ModuleName, 7, "invalid ICS20 version")
	ErrItemNotFound      = sdkerrors.Register(ModuleName, 8, "ItemNotFound")
)
