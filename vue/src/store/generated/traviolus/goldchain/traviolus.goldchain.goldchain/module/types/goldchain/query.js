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
const baseQueryResultRequest = { requestId: 0 };
export const QueryResultRequest = {
    encode(message, writer = Writer.create()) {
        if (message.requestId !== 0) {
            writer.uint32(8).int64(message.requestId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryResultRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.requestId = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryResultRequest };
        if (object.requestId !== undefined && object.requestId !== null) {
            message.requestId = Number(object.requestId);
        }
        else {
            message.requestId = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.requestId !== undefined && (obj.requestId = message.requestId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryResultRequest };
        if (object.requestId !== undefined && object.requestId !== null) {
            message.requestId = object.requestId;
        }
        else {
            message.requestId = 0;
        }
        return message;
    }
};
const baseQueryResultResponse = { result: 0 };
export const QueryResultResponse = {
    encode(message, writer = Writer.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int64(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryResultResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.result = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryResultResponse };
        if (object.result !== undefined && object.result !== null) {
            message.result = Number(object.result);
        }
        else {
            message.result = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined && (obj.result = message.result);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryResultResponse };
        if (object.result !== undefined && object.result !== null) {
            message.result = object.result;
        }
        else {
            message.result = 0;
        }
        return message;
    }
};
const baseQueryLatestRequestIDRequest = {};
export const QueryLatestRequestIDRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryLatestRequestIDRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseQueryLatestRequestIDRequest };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseQueryLatestRequestIDRequest };
        return message;
    }
};
const baseQueryLatestRequestIDResponse = { requestId: 0 };
export const QueryLatestRequestIDResponse = {
    encode(message, writer = Writer.create()) {
        if (message.requestId !== 0) {
            writer.uint32(8).int64(message.requestId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryLatestRequestIDResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.requestId = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryLatestRequestIDResponse };
        if (object.requestId !== undefined && object.requestId !== null) {
            message.requestId = Number(object.requestId);
        }
        else {
            message.requestId = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.requestId !== undefined && (obj.requestId = message.requestId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryLatestRequestIDResponse };
        if (object.requestId !== undefined && object.requestId !== null) {
            message.requestId = object.requestId;
        }
        else {
            message.requestId = 0;
        }
        return message;
    }
};
const baseQueryLatestGoldPriceRequest = {};
export const QueryLatestGoldPriceRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryLatestGoldPriceRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseQueryLatestGoldPriceRequest };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseQueryLatestGoldPriceRequest };
        return message;
    }
};
const baseQueryLatestGoldPriceResponse = { price: 0 };
export const QueryLatestGoldPriceResponse = {
    encode(message, writer = Writer.create()) {
        if (message.price !== 0) {
            writer.uint32(8).int64(message.price);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryLatestGoldPriceResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.price = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryLatestGoldPriceResponse };
        if (object.price !== undefined && object.price !== null) {
            message.price = Number(object.price);
        }
        else {
            message.price = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.price !== undefined && (obj.price = message.price);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryLatestGoldPriceResponse };
        if (object.price !== undefined && object.price !== null) {
            message.price = object.price;
        }
        else {
            message.price = 0;
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
    Result(request) {
        const data = QueryResultRequest.encode(request).finish();
        const promise = this.rpc.request('traviolus.goldchain.goldchain.Query', 'Result', data);
        return promise.then((data) => QueryResultResponse.decode(new Reader(data)));
    }
    LatestRequestID(request) {
        const data = QueryLatestRequestIDRequest.encode(request).finish();
        const promise = this.rpc.request('traviolus.goldchain.goldchain.Query', 'LatestRequestID', data);
        return promise.then((data) => QueryLatestRequestIDResponse.decode(new Reader(data)));
    }
    LatestGoldPrice(request) {
        const data = QueryLatestGoldPriceRequest.encode(request).finish();
        const promise = this.rpc.request('traviolus.goldchain.goldchain.Query', 'LatestGoldPrice', data);
        return promise.then((data) => QueryLatestGoldPriceResponse.decode(new Reader(data)));
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
