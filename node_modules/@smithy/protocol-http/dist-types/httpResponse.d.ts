import { HeaderBag, HttpMessage } from "./types";
type HttpResponseOptions = Partial<HttpMessage> & {
    statusCode: number;
};
/**
 * @public
 *
 * Represents an HTTP message as received in reply to a request. Contains a
 * numeric status code in addition to standard message properties.
 */
export interface HttpResponse extends HttpMessage {
    statusCode: number;
}
export declare class HttpResponse {
    statusCode: number;
    headers: HeaderBag;
    body?: any;
    constructor(options: HttpResponseOptions);
    static isInstance(response: unknown): response is HttpResponse;
}
export {};
