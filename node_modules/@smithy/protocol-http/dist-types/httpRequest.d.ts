import { Endpoint, QueryParameterBag } from "@smithy/types";
import { HeaderBag, HttpMessage } from "./types";
type HttpRequestOptions = Partial<HttpMessage> & Partial<Endpoint> & {
    method?: string;
};
/**
 * @public
 *
 * Interface an HTTP request class. Contains
 * addressing information in addition to standard message properties.
 */
export interface HttpRequest extends HttpMessage, Endpoint {
    method: string;
}
export declare class HttpRequest implements HttpMessage, Endpoint {
    method: string;
    protocol: string;
    hostname: string;
    port?: number;
    path: string;
    query: QueryParameterBag;
    headers: HeaderBag;
    body?: any;
    constructor(options: HttpRequestOptions);
    static isInstance(request: unknown): request is HttpRequest;
    clone(): HttpRequest;
}
export {};
