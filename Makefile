LEDGER_ENABLED ?= true

ifeq ($(LEDGER_ENABLED),true)
	build_tags += ledger
endif

ldflags = -X github.com/cosmos/cosmos-sdk/version.Name=goldchain \
	-X github.com/cosmos/cosmos-sdk/version.AppName=goldchaind \
	-X github.com/cosmos/cosmos-sdk/version.Commit=$(COMMIT) \
	-X github.com/cosmos/cosmos-sdk/version.Version=$(VERSION) \
	-X "github.com/cosmos/cosmos-sdk/version.BuildTags=$(build_tags)"

BUILD_FLAGS := -tags "$(build_tags)" -ldflags '$(ldflags)'

install: go.sum
	go install -mod=readonly $(BUILD_FLAGS) ./cmd/goldchaind