export type RequestHandlerOutput<ResponseType> = {
  response: ResponseType;
};
export interface RequestHandler<
  RequestType,
  ResponseType,
  HandlerOptions = {}
> {
  metadata?: RequestHandlerMetadata;
  destroy?: () => void;
  handle: (
    request: RequestType,
    handlerOptions?: HandlerOptions
  ) => Promise<RequestHandlerOutput<ResponseType>>;
}
export interface RequestHandlerMetadata {
  handlerProtocol: RequestHandlerProtocol | string;
}
export declare enum RequestHandlerProtocol {
  HTTP_0_9 = "http/0.9",
  HTTP_1_0 = "http/1.0",
  TDS_8_0 = "tds/8.0",
}
export interface RequestContext {
  destination: URL;
}
