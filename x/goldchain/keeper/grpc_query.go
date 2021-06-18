package keeper

import (
	"github.com/traviolus/goldchain/x/goldchain/types"
)

var _ types.QueryServer = Keeper{}
