/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
export const protobufPackage = 'traviolus.goldchain.goldchain';
const baseQueryAccountGoldRequest = { accountAddress: '' };
export const QueryAccountGoldRequest = {
    encode(message, writer = Writer.create()) {
        if (message.accountAddress !== '') {
            writer.uint32(10).string(message.accountAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAccountGoldRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAccountGoldRequest };
        if (object.accountAddress !== undefined && object.accountAddress !== null) {
            message.accountAddress = String(object.accountAddress);
        }
        else {
            message.accountAddress = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAccountGoldRequest };
        if (object.accountAddress !== undefined && object.accountAddress !== null) {
            message.accountAddress = object.accountAddress;
        }
        else {
            message.accountAddress = '';
        }
        return message;
    }
};
const baseQueryAccountGoldResponse = { amount: 0 };
export const QueryAccountGoldResponse = {
    encode(message, writer = Writer.create()) {
        if (message.amount !== 0) {
            writer.uint32(8).uint64(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAccountGoldResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAccountGoldResponse };
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Number(object.amount);
        }
        else {
            message.amount = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAccountGoldResponse };
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = 0;
        }
        return message;
    }
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    GoldAmount(request) {
        const data = QueryAccountGoldRequest.encode(request).finish();
        const promise = this.rpc.request('traviolus.goldchain.goldchain.Query', 'GoldAmount', data);
        return promise.then((data) => QueryAccountGoldResponse.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
