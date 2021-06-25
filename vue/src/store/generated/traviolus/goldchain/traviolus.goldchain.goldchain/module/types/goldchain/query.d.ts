import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "traviolus.goldchain.goldchain";
export interface QueryAccountGoldRequest {
    accountAddress: string;
}
export interface QueryAccountGoldResponse {
    amount: number;
}
export interface QueryResultRequest {
    requestId: number;
}
export interface QueryResultResponse {
    result: number;
}
export interface QueryLatestRequestIDRequest {
}
export interface QueryLatestRequestIDResponse {
    requestId: number;
}
export interface QueryLatestGoldPriceRequest {
}
export interface QueryLatestGoldPriceResponse {
    price: number;
}
export declare const QueryAccountGoldRequest: {
    encode(message: QueryAccountGoldRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAccountGoldRequest;
    fromJSON(object: any): QueryAccountGoldRequest;
    toJSON(message: QueryAccountGoldRequest): unknown;
    fromPartial(object: DeepPartial<QueryAccountGoldRequest>): QueryAccountGoldRequest;
};
export declare const QueryAccountGoldResponse: {
    encode(message: QueryAccountGoldResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAccountGoldResponse;
    fromJSON(object: any): QueryAccountGoldResponse;
    toJSON(message: QueryAccountGoldResponse): unknown;
    fromPartial(object: DeepPartial<QueryAccountGoldResponse>): QueryAccountGoldResponse;
};
export declare const QueryResultRequest: {
    encode(message: QueryResultRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryResultRequest;
    fromJSON(object: any): QueryResultRequest;
    toJSON(message: QueryResultRequest): unknown;
    fromPartial(object: DeepPartial<QueryResultRequest>): QueryResultRequest;
};
export declare const QueryResultResponse: {
    encode(message: QueryResultResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryResultResponse;
    fromJSON(object: any): QueryResultResponse;
    toJSON(message: QueryResultResponse): unknown;
    fromPartial(object: DeepPartial<QueryResultResponse>): QueryResultResponse;
};
export declare const QueryLatestRequestIDRequest: {
    encode(_: QueryLatestRequestIDRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryLatestRequestIDRequest;
    fromJSON(_: any): QueryLatestRequestIDRequest;
    toJSON(_: QueryLatestRequestIDRequest): unknown;
    fromPartial(_: DeepPartial<QueryLatestRequestIDRequest>): QueryLatestRequestIDRequest;
};
export declare const QueryLatestRequestIDResponse: {
    encode(message: QueryLatestRequestIDResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryLatestRequestIDResponse;
    fromJSON(object: any): QueryLatestRequestIDResponse;
    toJSON(message: QueryLatestRequestIDResponse): unknown;
    fromPartial(object: DeepPartial<QueryLatestRequestIDResponse>): QueryLatestRequestIDResponse;
};
export declare const QueryLatestGoldPriceRequest: {
    encode(_: QueryLatestGoldPriceRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryLatestGoldPriceRequest;
    fromJSON(_: any): QueryLatestGoldPriceRequest;
    toJSON(_: QueryLatestGoldPriceRequest): unknown;
    fromPartial(_: DeepPartial<QueryLatestGoldPriceRequest>): QueryLatestGoldPriceRequest;
};
export declare const QueryLatestGoldPriceResponse: {
    encode(message: QueryLatestGoldPriceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryLatestGoldPriceResponse;
    fromJSON(object: any): QueryLatestGoldPriceResponse;
    toJSON(message: QueryLatestGoldPriceResponse): unknown;
    fromPartial(object: DeepPartial<QueryLatestGoldPriceResponse>): QueryLatestGoldPriceResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    GoldAmount(request: QueryAccountGoldRequest): Promise<QueryAccountGoldResponse>;
    Result(request: QueryResultRequest): Promise<QueryResultResponse>;
    LatestRequestID(request: QueryLatestRequestIDRequest): Promise<QueryLatestRequestIDResponse>;
    /** this line is used by starport scaffolding # 2 */
    LatestGoldPrice(request: QueryLatestGoldPriceRequest): Promise<QueryLatestGoldPriceResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    GoldAmount(request: QueryAccountGoldRequest): Promise<QueryAccountGoldResponse>;
    Result(request: QueryResultRequest): Promise<QueryResultResponse>;
    LatestRequestID(request: QueryLatestRequestIDRequest): Promise<QueryLatestRequestIDResponse>;
    LatestGoldPrice(request: QueryLatestGoldPriceRequest): Promise<QueryLatestGoldPriceResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
