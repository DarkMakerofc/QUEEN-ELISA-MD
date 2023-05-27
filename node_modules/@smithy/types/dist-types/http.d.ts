/**
 * @public
 *
 * @deprecated use {@link EndpointV2} from `@aws-sdk/types`.
 */
export interface Endpoint {
    protocol: string;
    hostname: string;
    port?: number;
    path: string;
    query?: QueryParameterBag;
}
/**
 * @public
 *
 * A mapping of query parameter names to strings or arrays of strings, with the
 * second being used when a parameter contains a list of values. Value can be set
 * to null when query is not in key-value pairs shape
 */
export type QueryParameterBag = Record<string, string | Array<string> | null>;
