import { AbortSignal } from "@smithy/types";
export type FieldOptions = {
    name: string;
    kind?: FieldPosition;
    values?: string[];
};
export declare enum FieldPosition {
    HEADER = 0,
    TRAILER = 1
}
/**
 * @public
 *
 * A mapping of header names to string values. Multiple values for the same
 * header should be represented as a single string with values separated by
 * `, `.
 *
 * Keys should be considered case insensitive, even if this is not enforced by a
 * particular implementation. For example, given the following HeaderBag, where
 * keys differ only in case:
 *
 * ```json
 *    {
 *        'x-request-date': '2000-01-01T00:00:00Z',
 *        'X-Request-Date': '2001-01-01T00:00:00Z'
 *    }
 * ```
 *
 * The SDK may at any point during processing remove one of the object
 * properties in favor of the other. The headers may or may not be combined, and
 * the SDK will not deterministically select which header candidate to use.
 */
export type HeaderBag = Record<string, string>;
/**
 * @public
 *
 * Represents an HTTP message with headers and an optional static or streaming
 * body. bode: ArrayBuffer | ArrayBufferView | string | Uint8Array | Readable | ReadableStream;
 */
export interface HttpMessage {
    headers: HeaderBag;
    body?: any;
}
/**
 * @public
 *
 * Represents the options that may be passed to an Http Handler.
 */
export interface HttpHandlerOptions {
    abortSignal?: AbortSignal;
    /**
     * The maximum time in milliseconds that the connection phase of a request
     * may take before the connection attempt is abandoned.
     */
    requestTimeout?: number;
}
