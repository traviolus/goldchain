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

/** Query defines the gRPC querier service. */
export interface Query {
  /** this line is used by starport scaffolding # 2 */
  GoldAmount(request: QueryAccountGoldRequest): Promise<QueryAccountGoldResponse>
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
