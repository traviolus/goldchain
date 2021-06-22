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
