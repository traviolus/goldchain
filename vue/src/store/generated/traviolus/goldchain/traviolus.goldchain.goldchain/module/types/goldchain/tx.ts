/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { Coin } from '../cosmos/base/v1beta1/coin'

export const protobufPackage = 'traviolus.goldchain.goldchain'

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgBuyGold {
  buyerAddress: string
  amount: Coin[]
}

export interface MsgBuyGoldResponse {}

export interface MsgSellGold {
  sellerAddress: string
  amount: number
}

export interface MsgSellGoldResponse {}

export interface MsgRequestData {
  oracleScriptId: number
  sourceChannel: string
  calldata: Uint8Array
  askCount: number
  minCount: number
  feeLimit: Coin[]
  requestKey: string
  prepareGas: number
  executeGas: number
  sender: string
}

export interface MsgRequestDataResponse {}

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

const baseMsgSellGold: object = { sellerAddress: '', amount: 0 }

export const MsgSellGold = {
  encode(message: MsgSellGold, writer: Writer = Writer.create()): Writer {
    if (message.sellerAddress !== '') {
      writer.uint32(10).string(message.sellerAddress)
    }
    if (message.amount !== 0) {
      writer.uint32(16).uint64(message.amount)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSellGold {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgSellGold } as MsgSellGold
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.sellerAddress = reader.string()
          break
        case 2:
          message.amount = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgSellGold {
    const message = { ...baseMsgSellGold } as MsgSellGold
    if (object.sellerAddress !== undefined && object.sellerAddress !== null) {
      message.sellerAddress = String(object.sellerAddress)
    } else {
      message.sellerAddress = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Number(object.amount)
    } else {
      message.amount = 0
    }
    return message
  },

  toJSON(message: MsgSellGold): unknown {
    const obj: any = {}
    message.sellerAddress !== undefined && (obj.sellerAddress = message.sellerAddress)
    message.amount !== undefined && (obj.amount = message.amount)
    return obj
  },

  fromPartial(object: DeepPartial<MsgSellGold>): MsgSellGold {
    const message = { ...baseMsgSellGold } as MsgSellGold
    if (object.sellerAddress !== undefined && object.sellerAddress !== null) {
      message.sellerAddress = object.sellerAddress
    } else {
      message.sellerAddress = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount
    } else {
      message.amount = 0
    }
    return message
  }
}

const baseMsgSellGoldResponse: object = {}

export const MsgSellGoldResponse = {
  encode(_: MsgSellGoldResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSellGoldResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgSellGoldResponse } as MsgSellGoldResponse
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

  fromJSON(_: any): MsgSellGoldResponse {
    const message = { ...baseMsgSellGoldResponse } as MsgSellGoldResponse
    return message
  },

  toJSON(_: MsgSellGoldResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgSellGoldResponse>): MsgSellGoldResponse {
    const message = { ...baseMsgSellGoldResponse } as MsgSellGoldResponse
    return message
  }
}

const baseMsgRequestData: object = { oracleScriptId: 0, sourceChannel: '', askCount: 0, minCount: 0, requestKey: '', prepareGas: 0, executeGas: 0, sender: '' }

export const MsgRequestData = {
  encode(message: MsgRequestData, writer: Writer = Writer.create()): Writer {
    if (message.oracleScriptId !== 0) {
      writer.uint32(8).int64(message.oracleScriptId)
    }
    if (message.sourceChannel !== '') {
      writer.uint32(18).string(message.sourceChannel)
    }
    if (message.calldata.length !== 0) {
      writer.uint32(26).bytes(message.calldata)
    }
    if (message.askCount !== 0) {
      writer.uint32(32).uint64(message.askCount)
    }
    if (message.minCount !== 0) {
      writer.uint32(40).uint64(message.minCount)
    }
    for (const v of message.feeLimit) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim()
    }
    if (message.requestKey !== '') {
      writer.uint32(58).string(message.requestKey)
    }
    if (message.prepareGas !== 0) {
      writer.uint32(64).uint64(message.prepareGas)
    }
    if (message.executeGas !== 0) {
      writer.uint32(72).uint64(message.executeGas)
    }
    if (message.sender !== '') {
      writer.uint32(82).string(message.sender)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRequestData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgRequestData } as MsgRequestData
    message.feeLimit = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.oracleScriptId = longToNumber(reader.int64() as Long)
          break
        case 2:
          message.sourceChannel = reader.string()
          break
        case 3:
          message.calldata = reader.bytes()
          break
        case 4:
          message.askCount = longToNumber(reader.uint64() as Long)
          break
        case 5:
          message.minCount = longToNumber(reader.uint64() as Long)
          break
        case 6:
          message.feeLimit.push(Coin.decode(reader, reader.uint32()))
          break
        case 7:
          message.requestKey = reader.string()
          break
        case 8:
          message.prepareGas = longToNumber(reader.uint64() as Long)
          break
        case 9:
          message.executeGas = longToNumber(reader.uint64() as Long)
          break
        case 10:
          message.sender = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgRequestData {
    const message = { ...baseMsgRequestData } as MsgRequestData
    message.feeLimit = []
    if (object.oracleScriptId !== undefined && object.oracleScriptId !== null) {
      message.oracleScriptId = Number(object.oracleScriptId)
    } else {
      message.oracleScriptId = 0
    }
    if (object.sourceChannel !== undefined && object.sourceChannel !== null) {
      message.sourceChannel = String(object.sourceChannel)
    } else {
      message.sourceChannel = ''
    }
    if (object.calldata !== undefined && object.calldata !== null) {
      message.calldata = bytesFromBase64(object.calldata)
    }
    if (object.askCount !== undefined && object.askCount !== null) {
      message.askCount = Number(object.askCount)
    } else {
      message.askCount = 0
    }
    if (object.minCount !== undefined && object.minCount !== null) {
      message.minCount = Number(object.minCount)
    } else {
      message.minCount = 0
    }
    if (object.feeLimit !== undefined && object.feeLimit !== null) {
      for (const e of object.feeLimit) {
        message.feeLimit.push(Coin.fromJSON(e))
      }
    }
    if (object.requestKey !== undefined && object.requestKey !== null) {
      message.requestKey = String(object.requestKey)
    } else {
      message.requestKey = ''
    }
    if (object.prepareGas !== undefined && object.prepareGas !== null) {
      message.prepareGas = Number(object.prepareGas)
    } else {
      message.prepareGas = 0
    }
    if (object.executeGas !== undefined && object.executeGas !== null) {
      message.executeGas = Number(object.executeGas)
    } else {
      message.executeGas = 0
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender)
    } else {
      message.sender = ''
    }
    return message
  },

  toJSON(message: MsgRequestData): unknown {
    const obj: any = {}
    message.oracleScriptId !== undefined && (obj.oracleScriptId = message.oracleScriptId)
    message.sourceChannel !== undefined && (obj.sourceChannel = message.sourceChannel)
    message.calldata !== undefined && (obj.calldata = base64FromBytes(message.calldata !== undefined ? message.calldata : new Uint8Array()))
    message.askCount !== undefined && (obj.askCount = message.askCount)
    message.minCount !== undefined && (obj.minCount = message.minCount)
    if (message.feeLimit) {
      obj.feeLimit = message.feeLimit.map((e) => (e ? Coin.toJSON(e) : undefined))
    } else {
      obj.feeLimit = []
    }
    message.requestKey !== undefined && (obj.requestKey = message.requestKey)
    message.prepareGas !== undefined && (obj.prepareGas = message.prepareGas)
    message.executeGas !== undefined && (obj.executeGas = message.executeGas)
    message.sender !== undefined && (obj.sender = message.sender)
    return obj
  },

  fromPartial(object: DeepPartial<MsgRequestData>): MsgRequestData {
    const message = { ...baseMsgRequestData } as MsgRequestData
    message.feeLimit = []
    if (object.oracleScriptId !== undefined && object.oracleScriptId !== null) {
      message.oracleScriptId = object.oracleScriptId
    } else {
      message.oracleScriptId = 0
    }
    if (object.sourceChannel !== undefined && object.sourceChannel !== null) {
      message.sourceChannel = object.sourceChannel
    } else {
      message.sourceChannel = ''
    }
    if (object.calldata !== undefined && object.calldata !== null) {
      message.calldata = object.calldata
    } else {
      message.calldata = new Uint8Array()
    }
    if (object.askCount !== undefined && object.askCount !== null) {
      message.askCount = object.askCount
    } else {
      message.askCount = 0
    }
    if (object.minCount !== undefined && object.minCount !== null) {
      message.minCount = object.minCount
    } else {
      message.minCount = 0
    }
    if (object.feeLimit !== undefined && object.feeLimit !== null) {
      for (const e of object.feeLimit) {
        message.feeLimit.push(Coin.fromPartial(e))
      }
    }
    if (object.requestKey !== undefined && object.requestKey !== null) {
      message.requestKey = object.requestKey
    } else {
      message.requestKey = ''
    }
    if (object.prepareGas !== undefined && object.prepareGas !== null) {
      message.prepareGas = object.prepareGas
    } else {
      message.prepareGas = 0
    }
    if (object.executeGas !== undefined && object.executeGas !== null) {
      message.executeGas = object.executeGas
    } else {
      message.executeGas = 0
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender
    } else {
      message.sender = ''
    }
    return message
  }
}

const baseMsgRequestDataResponse: object = {}

export const MsgRequestDataResponse = {
  encode(_: MsgRequestDataResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRequestDataResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgRequestDataResponse } as MsgRequestDataResponse
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

  fromJSON(_: any): MsgRequestDataResponse {
    const message = { ...baseMsgRequestDataResponse } as MsgRequestDataResponse
    return message
  },

  toJSON(_: MsgRequestDataResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgRequestDataResponse>): MsgRequestDataResponse {
    const message = { ...baseMsgRequestDataResponse } as MsgRequestDataResponse
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  BuyGold(request: MsgBuyGold): Promise<MsgBuyGoldResponse>
  SellGold(request: MsgSellGold): Promise<MsgSellGoldResponse>
  RequestData(request: MsgRequestData): Promise<MsgRequestDataResponse>
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

  SellGold(request: MsgSellGold): Promise<MsgSellGoldResponse> {
    const data = MsgSellGold.encode(request).finish()
    const promise = this.rpc.request('traviolus.goldchain.goldchain.Msg', 'SellGold', data)
    return promise.then((data) => MsgSellGoldResponse.decode(new Reader(data)))
  }

  RequestData(request: MsgRequestData): Promise<MsgRequestDataResponse> {
    const data = MsgRequestData.encode(request).finish()
    const promise = this.rpc.request('traviolus.goldchain.goldchain.Msg', 'RequestData', data)
    return promise.then((data) => MsgRequestDataResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
}

declare var self: any | undefined
declare var window: any | undefined
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  throw 'Unable to locate global object'
})()

const atob: (b64: string) => string = globalThis.atob || ((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'))
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64)
  const arr = new Uint8Array(bin.length)
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i)
  }
  return arr
}

const btoa: (bin: string) => string = globalThis.btoa || ((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'))
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = []
  for (let i = 0; i < arr.byteLength; ++i) {
    bin.push(String.fromCharCode(arr[i]))
  }
  return btoa(bin.join(''))
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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER')
  }
  return long.toNumber()
}

if (util.Long !== Long) {
  util.Long = Long as any
  configure()
}
