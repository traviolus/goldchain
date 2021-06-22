/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal'
import { Coin } from '../cosmos/base/v1beta1/coin'

export const protobufPackage = 'traviolus.goldchain.goldchain'

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgBuyGold {
  buyerAddress: string
  amount: Coin[]
}

export interface MsgBuyGoldResponse {}

const baseMsgBuyGold: object = { buyerAddress: '' }

export const MsgBuyGold = {
  encode(message: MsgBuyGold, writer: Writer = Writer.create()): Writer {
    if (message.buyerAddress !== '') {
      writer.uint32(10).string(message.buyerAddress)
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBuyGold {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgBuyGold } as MsgBuyGold
    message.amount = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.buyerAddress = reader.string()
          break
        case 2:
          message.amount.push(Coin.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgBuyGold {
    const message = { ...baseMsgBuyGold } as MsgBuyGold
    message.amount = []
    if (object.buyerAddress !== undefined && object.buyerAddress !== null) {
      message.buyerAddress = String(object.buyerAddress)
    } else {
      message.buyerAddress = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      for (const e of object.amount) {
        message.amount.push(Coin.fromJSON(e))
      }
    }
    return message
  },

  toJSON(message: MsgBuyGold): unknown {
    const obj: any = {}
    message.buyerAddress !== undefined && (obj.buyerAddress = message.buyerAddress)
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined))
    } else {
      obj.amount = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<MsgBuyGold>): MsgBuyGold {
    const message = { ...baseMsgBuyGold } as MsgBuyGold
    message.amount = []
    if (object.buyerAddress !== undefined && object.buyerAddress !== null) {
      message.buyerAddress = object.buyerAddress
    } else {
      message.buyerAddress = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      for (const e of object.amount) {
        message.amount.push(Coin.fromPartial(e))
      }
    }
    return message
  }
}

const baseMsgBuyGoldResponse: object = {}

export const MsgBuyGoldResponse = {
  encode(_: MsgBuyGoldResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBuyGoldResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgBuyGoldResponse } as MsgBuyGoldResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgBuyGoldResponse {
    const message = { ...baseMsgBuyGoldResponse } as MsgBuyGoldResponse
    return message
  },

  toJSON(_: MsgBuyGoldResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgBuyGoldResponse>): MsgBuyGoldResponse {
    const message = { ...baseMsgBuyGoldResponse } as MsgBuyGoldResponse
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  BuyGold(request: MsgBuyGold): Promise<MsgBuyGoldResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  BuyGold(request: MsgBuyGold): Promise<MsgBuyGoldResponse> {
    const data = MsgBuyGold.encode(request).finish()
    const promise = this.rpc.request('traviolus.goldchain.goldchain.Msg', 'BuyGold', data)
    return promise.then((data) => MsgBuyGoldResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
}

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>
