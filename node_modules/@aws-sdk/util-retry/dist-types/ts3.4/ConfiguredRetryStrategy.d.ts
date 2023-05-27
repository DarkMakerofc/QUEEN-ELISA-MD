import {
  Provider,
  RetryBackoffStrategy,
  RetryErrorInfo,
  RetryStrategyV2,
  StandardRetryToken,
} from "@aws-sdk/types";
import { StandardRetryStrategy } from "./StandardRetryStrategy";
export declare class ConfiguredRetryStrategy
  extends StandardRetryStrategy
  implements RetryStrategyV2
{
  private readonly computeNextBackoffDelay;
  constructor(
    maxAttempts: number | Provider<number>,
    computeNextBackoffDelay?:
      | number
      | RetryBackoffStrategy["computeNextBackoffDelay"]
  );
  refreshRetryTokenForRetry(
    tokenToRenew: StandardRetryToken,
    errorInfo: RetryErrorInfo
  ): Promise<StandardRetryToken>;
}
