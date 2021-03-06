package cli

import (
	"context"
	"fmt"
	"github.com/cosmos/cosmos-sdk/client/flags"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"strconv"

	// "strings"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	// sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/traviolus/goldchain/x/goldchain/types"
)

// GetQueryCmd returns the cli query commands for this module
func GetQueryCmd(queryRoute string) *cobra.Command {
	// Group goldchain queries under a subcommand
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("Querying commands for the %s module", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}
	cmd.AddCommand(
		GetAccountGold(),
		GetCmdReadResult(),
		GetCmdLatestRequest(),
		GetCmdLatestGoldPrice(),
	)
	// this line is used by starport scaffolding # 1

	return cmd
}

func GetAccountGold() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "gold [account]",
		Short: "Get amount of gold in an account.",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}
			accAddress, err := sdk.AccAddressFromBech32(args[0])
			if err != nil {
				return err
			}
			queryClient := types.NewQueryClient(clientCtx)
			r, err := queryClient.GoldAmount(context.Background(), &types.QueryAccountGoldRequest{AccountAddress: accAddress.String()})
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(r)
		},
	}
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func GetCmdReadResult() *cobra.Command {
	cmd := &cobra.Command{
		Use:  "result",
		Args: cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}
			id, err := strconv.ParseInt(args[0], 10, 64)
			if err != nil {
				return err
			}
			queryClient := types.NewQueryClient(clientCtx)
			r, err := queryClient.Result(context.Background(), &types.QueryResultRequest{RequestId: id})
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(r)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func GetCmdLatestRequest() *cobra.Command {
	cmd := &cobra.Command{
		Use: "latest-request",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}
			queryClient := types.NewQueryClient(clientCtx)
			r, err := queryClient.LatestRequestID(context.Background(), &types.QueryLatestRequestIDRequest{})
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(r)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func GetCmdLatestGoldPrice() *cobra.Command {
	cmd := &cobra.Command{
		Use:  "latest-price",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}
			queryClient := types.NewQueryClient(clientCtx)
			r, err := queryClient.LatestGoldPrice(context.Background(), &types.QueryLatestGoldPriceRequest{})
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(r)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
