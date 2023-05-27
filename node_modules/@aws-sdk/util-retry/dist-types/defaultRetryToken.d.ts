import { StandardRetryToken } from "@aws-sdk/types";
/**
 * @internal
 */
export declare const createDefaultRetryToken: ({ retryDelay, retryCount, retryCost, }: {
    retryDelay: number;
    retryCount: number;
    retryCost?: number | undefined;
}) => StandardRetryToken;
