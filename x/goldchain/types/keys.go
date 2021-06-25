package types

import (
	"encoding/binary"
	bandoracle "github.com/bandprotocol/chain/v2/x/oracle/types"
)

const (
	// ModuleName defines the module name
	ModuleName = "goldchain"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey is the message route for slashing
	RouterKey = ModuleName

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_goldchain"

	PortKey = ModuleName

	Version = "ics20-1"
	// this line is used by starport scaffolding # ibc/keys/name
)

// this line is used by starport scaffolding # ibc/keys/port

var (
	ResultStoreKeyPrefix = []byte{0xff}
	LatestRequestIDKey = []byte{0x01}
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

func int64ToBytes(num int64) []byte {
	result := make([]byte, 8)
	binary.BigEndian.PutUint64(result, uint64(num))
	return result
}

func ResultStoreKey(requestID bandoracle.RequestID) []byte {
	return append(ResultStoreKeyPrefix, int64ToBytes(int64(requestID))...)
}
