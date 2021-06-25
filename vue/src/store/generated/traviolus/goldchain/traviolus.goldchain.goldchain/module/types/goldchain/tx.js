/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
import { Coin } from '../cosmos/base/v1beta1/coin';
export const protobufPackage = 'traviolus.goldchain.goldchain';
const baseMsgBuyGold = { buyerAddress: '' };
export const MsgBuyGold = {
    encode(message, writer = Writer.create()) {
        if (message.buyerAddress !== '') {
            writer.uint32(10).string(message.buyerAddress);
        }
        for (const v of message.amount) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgBuyGold };
        message.amount = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.buyerAddress = reader.string();
                    break;
                case 2:
                    message.amount.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgBuyGold };
        message.amount = [];
        if (object.buyerAddress !== undefined && object.buyerAddress !== null) {
            message.buyerAddress = String(object.buyerAddress);
        }
        else {
            message.buyerAddress = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            for (const e of object.amount) {
                message.amount.push(Coin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.buyerAddress !== undefined && (obj.buyerAddress = message.buyerAddress);
        if (message.amount) {
            obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgBuyGold };
        message.amount = [];
        if (object.buyerAddress !== undefined && object.buyerAddress !== null) {
            message.buyerAddress = object.buyerAddress;
        }
        else {
            message.buyerAddress = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            for (const e of object.amount) {
                message.amount.push(Coin.fromPartial(e));
            }
        }
        return message;
    }
};
const baseMsgBuyGoldResponse = {};
export const MsgBuyGoldResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgBuyGoldResponse };
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
        const message = { ...baseMsgBuyGoldResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgBuyGoldResponse };
        return message;
    }
};
const baseMsgSellGold = { sellerAddress: '', amount: 0 };
export const MsgSellGold = {
    encode(message, writer = Writer.create()) {
        if (message.sellerAddress !== '') {
            writer.uint32(10).string(message.sellerAddress);
        }
        if (message.amount !== 0) {
            writer.uint32(16).uint64(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgSellGold };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sellerAddress = reader.string();
                    break;
                case 2:
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
        const message = { ...baseMsgSellGold };
        if (object.sellerAddress !== undefined && object.sellerAddress !== null) {
            message.sellerAddress = String(object.sellerAddress);
        }
        else {
            message.sellerAddress = '';
        }
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
        message.sellerAddress !== undefined && (obj.sellerAddress = message.sellerAddress);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgSellGold };
        if (object.sellerAddress !== undefined && object.sellerAddress !== null) {
            message.sellerAddress = object.sellerAddress;
        }
        else {
            message.sellerAddress = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = 0;
        }
        return message;
    }
};
const baseMsgSellGoldResponse = {};
export const MsgSellGoldResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgSellGoldResponse };
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
        const message = { ...baseMsgSellGoldResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgSellGoldResponse };
        return message;
    }
};
const baseMsgRequestData = { oracleScriptId: 0, sourceChannel: '', askCount: 0, minCount: 0, requestKey: '', prepareGas: 0, executeGas: 0, sender: '' };
export const MsgRequestData = {
    encode(message, writer = Writer.create()) {
        if (message.oracleScriptId !== 0) {
            writer.uint32(8).int64(message.oracleScriptId);
        }
        if (message.sourceChannel !== '') {
            writer.uint32(18).string(message.sourceChannel);
        }
        if (message.calldata.length !== 0) {
            writer.uint32(26).bytes(message.calldata);
        }
        if (message.askCount !== 0) {
            writer.uint32(32).uint64(message.askCount);
        }
        if (message.minCount !== 0) {
            writer.uint32(40).uint64(message.minCount);
        }
        for (const v of message.feeLimit) {
            Coin.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.requestKey !== '') {
            writer.uint32(58).string(message.requestKey);
        }
        if (message.prepareGas !== 0) {
            writer.uint32(64).uint64(message.prepareGas);
        }
        if (message.executeGas !== 0) {
            writer.uint32(72).uint64(message.executeGas);
        }
        if (message.sender !== '') {
            writer.uint32(82).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgRequestData };
        message.feeLimit = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.oracleScriptId = longToNumber(reader.int64());
                    break;
                case 2:
                    message.sourceChannel = reader.string();
                    break;
                case 3:
                    message.calldata = reader.bytes();
                    break;
                case 4:
                    message.askCount = longToNumber(reader.uint64());
                    break;
                case 5:
                    message.minCount = longToNumber(reader.uint64());
                    break;
                case 6:
                    message.feeLimit.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.requestKey = reader.string();
                    break;
                case 8:
                    message.prepareGas = longToNumber(reader.uint64());
                    break;
                case 9:
                    message.executeGas = longToNumber(reader.uint64());
                    break;
                case 10:
                    message.sender = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgRequestData };
        message.feeLimit = [];
        if (object.oracleScriptId !== undefined && object.oracleScriptId !== null) {
            message.oracleScriptId = Number(object.oracleScriptId);
        }
        else {
            message.oracleScriptId = 0;
        }
        if (object.sourceChannel !== undefined && object.sourceChannel !== null) {
            message.sourceChannel = String(object.sourceChannel);
        }
        else {
            message.sourceChannel = '';
        }
        if (object.calldata !== undefined && object.calldata !== null) {
            message.calldata = bytesFromBase64(object.calldata);
        }
        if (object.askCount !== undefined && object.askCount !== null) {
            message.askCount = Number(object.askCount);
        }
        else {
            message.askCount = 0;
        }
        if (object.minCount !== undefined && object.minCount !== null) {
            message.minCount = Number(object.minCount);
        }
        else {
            message.minCount = 0;
        }
        if (object.feeLimit !== undefined && object.feeLimit !== null) {
            for (const e of object.feeLimit) {
                message.feeLimit.push(Coin.fromJSON(e));
            }
        }
        if (object.requestKey !== undefined && object.requestKey !== null) {
            message.requestKey = String(object.requestKey);
        }
        else {
            message.requestKey = '';
        }
        if (object.prepareGas !== undefined && object.prepareGas !== null) {
            message.prepareGas = Number(object.prepareGas);
        }
        else {
            message.prepareGas = 0;
        }
        if (object.executeGas !== undefined && object.executeGas !== null) {
            message.executeGas = Number(object.executeGas);
        }
        else {
            message.executeGas = 0;
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.oracleScriptId !== undefined && (obj.oracleScriptId = message.oracleScriptId);
        message.sourceChannel !== undefined && (obj.sourceChannel = message.sourceChannel);
        message.calldata !== undefined && (obj.calldata = base64FromBytes(message.calldata !== undefined ? message.calldata : new Uint8Array()));
        message.askCount !== undefined && (obj.askCount = message.askCount);
        message.minCount !== undefined && (obj.minCount = message.minCount);
        if (message.feeLimit) {
            obj.feeLimit = message.feeLimit.map((e) => (e ? Coin.toJSON(e) : undefined));
        }
        else {
            obj.feeLimit = [];
        }
        message.requestKey !== undefined && (obj.requestKey = message.requestKey);
        message.prepareGas !== undefined && (obj.prepareGas = message.prepareGas);
        message.executeGas !== undefined && (obj.executeGas = message.executeGas);
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgRequestData };
        message.feeLimit = [];
        if (object.oracleScriptId !== undefined && object.oracleScriptId !== null) {
            message.oracleScriptId = object.oracleScriptId;
        }
        else {
            message.oracleScriptId = 0;
        }
        if (object.sourceChannel !== undefined && object.sourceChannel !== null) {
            message.sourceChannel = object.sourceChannel;
        }
        else {
            message.sourceChannel = '';
        }
        if (object.calldata !== undefined && object.calldata !== null) {
            message.calldata = object.calldata;
        }
        else {
            message.calldata = new Uint8Array();
        }
        if (object.askCount !== undefined && object.askCount !== null) {
            message.askCount = object.askCount;
        }
        else {
            message.askCount = 0;
        }
        if (object.minCount !== undefined && object.minCount !== null) {
            message.minCount = object.minCount;
        }
        else {
            message.minCount = 0;
        }
        if (object.feeLimit !== undefined && object.feeLimit !== null) {
            for (const e of object.feeLimit) {
                message.feeLimit.push(Coin.fromPartial(e));
            }
        }
        if (object.requestKey !== undefined && object.requestKey !== null) {
            message.requestKey = object.requestKey;
        }
        else {
            message.requestKey = '';
        }
        if (object.prepareGas !== undefined && object.prepareGas !== null) {
            message.prepareGas = object.prepareGas;
        }
        else {
            message.prepareGas = 0;
        }
        if (object.executeGas !== undefined && object.executeGas !== null) {
            message.executeGas = object.executeGas;
        }
        else {
            message.executeGas = 0;
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = '';
        }
        return message;
    }
};
const baseMsgRequestDataResponse = {};
export const MsgRequestDataResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgRequestDataResponse };
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
        const message = { ...baseMsgRequestDataResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgRequestDataResponse };
        return message;
    }
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    BuyGold(request) {
        const data = MsgBuyGold.encode(request).finish();
        const promise = this.rpc.request('traviolus.goldchain.goldchain.Msg', 'BuyGold', data);
        return promise.then((data) => MsgBuyGoldResponse.decode(new Reader(data)));
    }
    SellGold(request) {
        const data = MsgSellGold.encode(request).finish();
        const promise = this.rpc.request('traviolus.goldchain.goldchain.Msg', 'SellGold', data);
        return promise.then((data) => MsgSellGoldResponse.decode(new Reader(data)));
    }
    RequestData(request) {
        const data = MsgRequestData.encode(request).finish();
        const promise = this.rpc.request('traviolus.goldchain.goldchain.Msg', 'RequestData', data);
        return promise.then((data) => MsgRequestDataResponse.decode(new Reader(data)));
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
const atob = globalThis.atob || ((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa || ((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'));
function base64FromBytes(arr) {
    const bin = [];
    for (let i = 0; i < arr.byteLength; ++i) {
        bin.push(String.fromCharCode(arr[i]));
    }
    return btoa(bin.join(''));
}
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
