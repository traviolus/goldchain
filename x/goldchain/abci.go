package goldchain

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/traviolus/goldchain/x/goldchain/keeper"
)

func handleEndBlock(ctx sdk.Context, k keeper.Keeper) {
	if ctx.BlockHeight() % 60 == 0 {
		k.FetchGoldPrice(ctx)
	}
}

