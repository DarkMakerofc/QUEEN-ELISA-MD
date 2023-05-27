import { Endpoint, EndpointV2 } from "@aws-sdk/types";
/**
 * @internal
 */
export declare const toEndpointV1: (endpoint: string | Endpoint | EndpointV2) => Endpoint;
