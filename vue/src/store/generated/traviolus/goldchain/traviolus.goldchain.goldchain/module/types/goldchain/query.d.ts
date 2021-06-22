import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "traviolus.goldchain.goldchain";
export interface QueryAccountGoldRequest {
    accountAddress: string;
}
export interface QueryAccountGoldResponse {
    amount: number;
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
/** Query defines the gRPC querier service. */
export interface Query {
    /** this line is used by starport scaffolding # 2 */
    GoldAmount(request: QueryAccountGoldRequest): Promise<QueryAccountGoldResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    GoldAmount(request: QueryAccountGoldRequest): Promise<QueryAccountGoldResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
