import { RequestContext } from "@aws-sdk/types";
import { ConnectConfiguration } from "@aws-sdk/types";
import {
  ConnectionManager,
  ConnectionManagerConfiguration,
} from "@aws-sdk/types";
import { ClientHttp2Session } from "http2";
export declare class NodeHttp2ConnectionManager
  implements ConnectionManager<ClientHttp2Session>
{
  constructor(config: ConnectionManagerConfiguration);
  private config;
  private readonly sessionCache;
  lease(
    requestContext: RequestContext,
    connectionConfiguration: ConnectConfiguration
  ): ClientHttp2Session;
  deleteSession(authority: string, session: ClientHttp2Session): void;
  release(requestContext: RequestContext, session: ClientHttp2Session): void;
  destroy(): void;
  setMaxConcurrentStreams(maxConcurrentStreams: number): void;
  setDisableConcurrentStreams(disableConcurrentStreams: boolean): void;
  private getUrlString;
}
