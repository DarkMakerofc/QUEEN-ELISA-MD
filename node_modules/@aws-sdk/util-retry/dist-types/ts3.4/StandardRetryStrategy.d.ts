import {
  Provider,
  RetryErrorInfo,
  RetryStrategyV2,
  StandardRetryToken,
} from "@aws-sdk/types";
export declare class StandardRetryStrategy implements RetryStrategyV2 {
  private readonly maxAttempts;
  readonly mode: string;
  private capacity;
  private readonly retryBackoffStrategy;
  private readonly maxAttemptsProvider;
  constructor(maxAttempts: number);
  constructor(maxAttemptsProvider: Provider<number>);
  acquireInitialRetryToken(
    retryTokenScope: string
  ): Promise<StandardRetryToken>;
  refreshRetryTokenForRetry(
    token: StandardRetryToken,
    errorInfo: RetryErrorInfo
  ): Promise<StandardRetryToken>;
  recordSuccess(token: StandardRetryToken): void;
  getCapacity(): number;
  private getMaxAttempts;
  private shouldRetry;
  private getCapacityCost;
  private isRetryableError;
}
