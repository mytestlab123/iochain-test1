package keeper_test

import (
	"context"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/mytestlab123/iochain-test1/testutil/keeper"
	"github.com/mytestlab123/iochain-test1/x/iochaintest1/keeper"
	"github.com/mytestlab123/iochain-test1/x/iochaintest1/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.Iochaintest1Keeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
