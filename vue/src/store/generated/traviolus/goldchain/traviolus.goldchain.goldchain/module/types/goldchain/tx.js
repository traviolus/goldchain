/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal';
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
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    BuyGold(request) {
        const data = MsgBuyGold.encode(request).finish();
        const promise = this.rpc.request('traviolus.goldchain.goldchain.Msg', 'BuyGold', data);
        return promise.then((data) => MsgBuyGoldResponse.decode(new Reader(data)));
    }
}
