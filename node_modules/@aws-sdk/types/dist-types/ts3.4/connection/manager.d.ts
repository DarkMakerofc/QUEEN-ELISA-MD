import { RequestContext } from "../transfer";
import { ConnectConfiguration } from "./config";
export interface ConnectionManagerConfiguration {
  maxConcurrency?: number;
  disableConcurrency?: boolean;
}
export interface ConnectionManager<T> {
  lease(
    requestContext: RequestContext,
    connectionConfiguration: ConnectConfiguration
  ): T;
  release(requestContext: RequestContext, connection: T): void;
  destroy(): void;
}
