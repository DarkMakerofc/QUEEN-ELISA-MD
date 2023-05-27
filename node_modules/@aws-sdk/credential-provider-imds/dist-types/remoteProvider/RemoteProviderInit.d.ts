import { Logger } from "@aws-sdk/types";
/**
 * @internal
 */
export declare const DEFAULT_TIMEOUT = 1000;
/**
 * @internal
 */
export declare const DEFAULT_MAX_RETRIES = 0;
/**
 * @internal
 */
export interface RemoteProviderConfig {
    /**
     * The connection timeout (in milliseconds)
     */
    timeout: number;
    /**
     * The maximum number of times the HTTP connection should be retried
     */
    maxRetries: number;
}
/**
 * @internal
 */
export interface RemoteProviderInit extends Partial<RemoteProviderConfig> {
    logger?: Logger;
}
/**
 * @internal
 */
export declare const providerConfigFromInit: ({ maxRetries, timeout, }: RemoteProviderInit) => RemoteProviderConfig;
