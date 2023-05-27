/// <reference types="node" />
/// <reference types="node" />
import { HttpHandler, HttpRequest, HttpResponse } from "@aws-sdk/protocol-http";
import { HttpHandlerOptions, Provider } from "@aws-sdk/types";
import { Agent as hAgent } from "http";
import { Agent as hsAgent } from "https";
/**
 * Represents the http options that can be passed to a node http client.
 */
export interface NodeHttpHandlerOptions {
    /**
     * The maximum time in milliseconds that the connection phase of a request
     * may take before the connection attempt is abandoned.
     *
     * Defaults to 0, which disables the timeout.
     */
    connectionTimeout?: number;
    /**
     * The number of milliseconds a request can take before automatically being terminated.
     * Defaults to 0, which disables the timeout.
     */
    requestTimeout?: number;
    /**
     * @deprecated Use {@link requestTimeout}
     *
     * The maximum time in milliseconds that a socket may remain idle before it
     * is closed.
     */
    socketTimeout?: number;
    httpAgent?: hAgent;
    httpsAgent?: hsAgent;
}
export declare const DEFAULT_REQUEST_TIMEOUT = 0;
export declare class NodeHttpHandler implements HttpHandler {
    private config?;
    private readonly configProvider;
    readonly metadata: {
        handlerProtocol: string;
    };
    constructor(options?: NodeHttpHandlerOptions | Provider<NodeHttpHandlerOptions | void>);
    private resolveDefaultConfig;
    destroy(): void;
    handle(request: HttpRequest, { abortSignal }?: HttpHandlerOptions): Promise<{
        response: HttpResponse;
    }>;
}
