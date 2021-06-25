/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'

export const protobufPackage = 'traviolus.goldchain.goldchain'

export interface QueryAccountGoldRequest {
  accountAddress: string
}

export interface QueryAccountGoldResponse {
  amount: number
}

export interface QueryResultRequest {
  requestId: number
}

export interface QueryResultResponse {
  result: number
}

export interface QueryLatestRequestIDRequest {}

export interface QueryLatestRequestIDResponse {
  requestId: number
}

export interface QueryLatestGoldPriceRequest {}

export interface QueryLatestGoldPriceResponse {
  price: number
}

const baseQueryAccountGoldRequest: object = { accountAddress: '' }

export const QueryAccountGoldRequest = {
  encode(message: QueryAccountGoldRequest, writer: Writer = Writer.create()): Writer {
    if (message.accountAddress !== '') {
      writer.uint32(10).string(message.accountAddress)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAccountGoldRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAccountGoldRequest } as QueryAccountGoldRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.accountAddress = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAccountGoldRequest {
    const message = { ...baseQueryAccountGoldRequest } as QueryAccountGoldRequest
    if (object.accountAddress !== undefined && object.accountAddress !== null) {
      message.accountAddress = String(object.accountAddress)
    } else {
      message.accountAddress = ''
    }
    return message
  },

  toJSON(message: QueryAccountGoldRequest): unknown {
    const obj: any = {}
    message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAccountGoldRequest>): QueryAccountGoldRequest {
    const message = { ...baseQueryAccountGoldRequest } as QueryAccountGoldRequest
    if (object.accountAddress !== undefined && object.accountAddress !== null) {
      message.accountAddress = object.accountAddress
    } else {
      message.accountAddress = ''
    }
    return message
  }
}

const baseQueryAccountGoldResponse: object = { amount: 0 }

export const QueryAccountGoldResponse = {
  encode(message: QueryAccountGoldResponse, writer: Writer = Writer.create()): Writer {
    if (message.amount !== 0) {
      writer.uint32(8).uint64(message.amount)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAccountGoldResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAccountGoldResponse } as QueryAccountGoldResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.amount = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAccountGoldResponse {
    const message = { ...baseQueryAccountGoldResponse } as QueryAccountGoldResponse
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Number(object.amount)
    } else {
      message.amount = 0
    }
    return message
  },

  toJSON(message: QueryAccountGoldResponse): unknown {
    const obj: any = {}
    message.amount !== undefined && (obj.amount = message.amount)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAccountGoldResponse>): QueryAccountGoldResponse {
    const message = { ...baseQueryAccountGoldResponse } as QueryAccountGoldResponse
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount
    } else {
      message.amount = 0
    }
    return message
  }
}

const baseQueryResultRequest: object = { requestId: 0 }

export const QueryResultRequest = {
  encode(message: QueryResultRequest, writer: Writer = Writer.create()): Writer {
    if (message.requestId !== 0) {
      writer.uint32(8).int64(message.requestId)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryResultRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryResultRequest } as QueryResultRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.requestId = longToNumber(reader.int64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryResultRequest {
    const message = { ...baseQueryResultRequest } as QueryResultRequest
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = Number(object.requestId)
    } else {
      message.requestId = 0
    }
    return message
  },

  toJSON(message: QueryResultRequest): unknown {
    const obj: any = {}
    message.requestId !== undefined && (obj.requestId = message.requestId)
    return obj
  },

  fromPartial(object: DeepPartial<QueryResultRequest>): QueryResultRequest {
    const message = { ...baseQueryResultRequest } as QueryResultRequest
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = object.requestId
    } else {
      message.requestId = 0
    }
    return message
  }
}

const baseQueryResultResponse: object = { result: 0 }

export const QueryResultResponse = {
  encode(message: QueryResultResponse, writer: Writer = Writer.create()): Writer {
    if (message.result !== 0) {
      writer.uint32(8).int64(message.result)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryResultResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryResultResponse } as QueryResultResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.result = longToNumber(reader.int64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryResultResponse {
    const message = { ...baseQueryResultResponse } as QueryResultResponse
    if (object.result !== undefined && object.result !== null) {
      message.result = Number(object.result)
    } else {
      message.result = 0
    }
    return message
  },

  toJSON(message: QueryResultResponse): unknown {
    const obj: any = {}
    message.result !== undefined && (obj.result = message.result)
    return obj
  },

  fromPartial(object: DeepPartial<QueryResultResponse>): QueryResultResponse {
    const message = { ...baseQueryResultResponse } as QueryResultResponse
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result
    } else {
      message.result = 0
    }
    return message
  }
}

const baseQueryLatestRequestIDRequest: object = {}

export const QueryLatestRequestIDRequest = {
  encode(_: QueryLatestRequestIDRequest, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryLatestRequestIDRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryLatestRequestIDRequest } as QueryLatestRequestIDRequest
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

  fromJSON(_: any): QueryLatestRequestIDRequest {
    const message = { ...baseQueryLatestRequestIDRequest } as QueryLatestRequestIDRequest
    return message
  },

  toJSON(_: QueryLatestRequestIDRequest): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<QueryLatestRequestIDRequest>): QueryLatestRequestIDRequest {
    const message = { ...baseQueryLatestRequestIDRequest } as QueryLatestRequestIDRequest
    return message
  }
}

const baseQueryLatestRequestIDResponse: object = { requestId: 0 }

export const QueryLatestRequestIDResponse = {
  encode(message: QueryLatestRequestIDResponse, writer: Writer = Writer.create()): Writer {
    if (message.requestId !== 0) {
      writer.uint32(8).int64(message.requestId)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryLatestRequestIDResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryLatestRequestIDResponse } as QueryLatestRequestIDResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.requestId = longToNumber(reader.int64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryLatestRequestIDResponse {
    const message = { ...baseQueryLatestRequestIDResponse } as QueryLatestRequestIDResponse
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = Number(object.requestId)
    } else {
      message.requestId = 0
    }
    return message
  },

  toJSON(message: QueryLatestRequestIDResponse): unknown {
    const obj: any = {}
    message.requestId !== undefined && (obj.requestId = message.requestId)
    return obj
  },

  fromPartial(object: DeepPartial<QueryLatestRequestIDResponse>): QueryLatestRequestIDResponse {
    const message = { ...baseQueryLatestRequestIDResponse } as QueryLatestRequestIDResponse
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = object.requestId
    } else {
      message.requestId = 0
    }
    return message
  }
}

const baseQueryLatestGoldPriceRequest: object = {}

export const QueryLatestGoldPriceRequest = {
  encode(_: QueryLatestGoldPriceRequest, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryLatestGoldPriceRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryLatestGoldPriceRequest } as QueryLatestGoldPriceRequest
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

  fromJSON(_: any): QueryLatestGoldPriceRequest {
    const message = { ...baseQueryLatestGoldPriceRequest } as QueryLatestGoldPriceRequest
    return message
  },

  toJSON(_: QueryLatestGoldPriceRequest): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<QueryLatestGoldPriceRequest>): QueryLatestGoldPriceRequest {
    const message = { ...baseQueryLatestGoldPriceRequest } as QueryLatestGoldPriceRequest
    return message
  }
}

const baseQueryLatestGoldPriceResponse: object = { price: 0 }

export const QueryLatestGoldPriceResponse = {
  encode(message: QueryLatestGoldPriceResponse, writer: Writer = Writer.create()): Writer {
    if (message.price !== 0) {
      writer.uint32(8).int64(message.price)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryLatestGoldPriceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryLatestGoldPriceResponse } as QueryLatestGoldPriceResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.price = longToNumber(reader.int64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryLatestGoldPriceResponse {
    const message = { ...baseQueryLatestGoldPriceResponse } as QueryLatestGoldPriceResponse
    if (object.price !== undefined && object.price !== null) {
      message.price = Number(object.price)
    } else {
      message.price = 0
    }
    return message
  },

  toJSON(message: QueryLatestGoldPriceResponse): unknown {
    const obj: any = {}
    message.price !== undefined && (obj.price = message.price)
    return obj
  },

  fromPartial(object: DeepPartial<QueryLatestGoldPriceResponse>): QueryLatestGoldPriceResponse {
    const message = { ...baseQueryLatestGoldPriceResponse } as QueryLatestGoldPriceResponse
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price
    } else {
      message.price = 0
    }
    return message
  }
}

/** Query defines the gRPC querier service. */
export interface Query {
  GoldAmount(request: QueryAccountGoldRequest): Promise<QueryAccountGoldResponse>
  Result(request: QueryResultRequest): Promise<QueryResultResponse>
  LatestRequestID(request: QueryLatestRequestIDRequest): Promise<QueryLatestRequestIDResponse>
  /** this line is used by starport scaffolding # 2 */
  LatestGoldPrice(request: QueryLatestGoldPriceRequest): Promise<QueryLatestGoldPriceResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  GoldAmount(request: QueryAccountGoldRequest): Promise<QueryAccountGoldResponse> {
    const data = QueryAccountGoldRequest.encode(request).finish()
    const promise = this.rpc.request('traviolus.goldchain.goldchain.Query', 'GoldAmount', data)
    return promise.then((data) => QueryAccountGoldResponse.decode(new Reader(data)))
  }

  Result(request: QueryResultRequest): Promise<QueryResultResponse> {
    const data = QueryResultRequest.encode(request).finish()
    const promise = this.rpc.request('traviolus.goldchain.goldchain.Query', 'Result', data)
    return promise.then((data) => QueryResultResponse.decode(new Reader(data)))
  }

  LatestRequestID(request: QueryLatestRequestIDRequest): Promise<QueryLatestRequestIDResponse> {
    const data = QueryLatestRequestIDRequest.encode(request).finish()
    const promise = this.rpc.request('traviolus.goldchain.goldchain.Query', 'LatestRequestID', data)
    return promise.then((data) => QueryLatestRequestIDResponse.decode(new Reader(data)))
  }

  LatestGoldPrice(request: QueryLatestGoldPriceRequest): Promise<QueryLatestGoldPriceResponse> {
    const data = QueryLatestGoldPriceRequest.encode(request).finish()
    const promise = this.rpc.request('traviolus.goldchain.goldchain.Query', 'LatestGoldPrice', data)
    return promise.then((data) => QueryLatestGoldPriceResponse.decode(new Reader(data)))
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
