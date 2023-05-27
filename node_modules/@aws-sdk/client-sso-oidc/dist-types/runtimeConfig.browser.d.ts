import { FetchHttpHandler as RequestHandler } from "@aws-sdk/fetch-http-handler";
import { SSOOIDCClientConfig } from "./SSOOIDCClient";
/**
 * @internal
 */
export declare const getRuntimeConfig: (config: SSOOIDCClientConfig) => {
    runtime: string;
    defaultsMode: import("@aws-sdk/types").Provider<import("@aws-sdk/smithy-client").ResolvedDefaultsMode>;
    bodyLengthChecker: import("@aws-sdk/types").BodyLengthCalculator;
    defaultUserAgentProvider: import("@aws-sdk/types").Provider<import("@aws-sdk/types").UserAgent>;
    maxAttempts: (number | import("@smithy/types").Provider<number>) & (number | import("@aws-sdk/types").Provider<number>);
    region: string | import("@aws-sdk/types").Provider<any>;
    requestHandler: (import("@aws-sdk/types").RequestHandler<any, any, import("@aws-sdk/types").HttpHandlerOptions> & import("@smithy/protocol-http").HttpHandler) | RequestHandler;
    retryMode: string | import("@smithy/types").Provider<string>;
    sha256: import("@aws-sdk/types").HashConstructor;
    streamCollector: import("@smithy/types").StreamCollector;
    useDualstackEndpoint: (boolean | import("@smithy/types").Provider<boolean>) & (boolean | import("@aws-sdk/types").Provider<boolean>);
    useFipsEndpoint: (boolean | import("@smithy/types").Provider<boolean>) & (boolean | import("@aws-sdk/types").Provider<boolean>);
    apiVersion: string;
    urlParser: import("@aws-sdk/types").UrlParser;
    base64Decoder: import("@smithy/types").Decoder;
    base64Encoder: import("@smithy/types").Encoder;
    utf8Decoder: import("@smithy/types").Decoder;
    utf8Encoder: import("@smithy/types").Encoder;
    disableHostPrefix: boolean;
    serviceId: string;
    logger: import("@aws-sdk/types").Logger;
    endpoint?: ((string | import("@aws-sdk/types").Endpoint | import("@aws-sdk/types").Provider<import("@aws-sdk/types").Endpoint> | import("@aws-sdk/types").EndpointV2 | import("@aws-sdk/types").Provider<import("@aws-sdk/types").EndpointV2>) & (string | import("@smithy/types").Provider<string> | import("@smithy/types").Endpoint | import("@smithy/types").Provider<import("@smithy/types").Endpoint> | import("@aws-sdk/types").EndpointV2 | import("@smithy/types").Provider<import("@aws-sdk/types").EndpointV2>)) | undefined;
    endpointProvider: (endpointParams: import("./endpoint/EndpointParameters").EndpointParameters, context?: {
        logger?: import("@aws-sdk/types").Logger | undefined;
    }) => import("@aws-sdk/types").EndpointV2;
    tls?: boolean | undefined;
    retryStrategy?: import("@aws-sdk/types").RetryStrategy | import("@aws-sdk/types").RetryStrategyV2 | undefined;
    customUserAgent?: string | import("@aws-sdk/types").UserAgent | undefined;
};
