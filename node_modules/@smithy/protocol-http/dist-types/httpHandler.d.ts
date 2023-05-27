import { RequestHandler } from "@smithy/types";
import { HttpRequest } from "./httpRequest";
import { HttpResponse } from "./httpResponse";
import { HttpHandlerOptions } from "./types";
export type HttpHandler = RequestHandler<HttpRequest, HttpResponse, HttpHandlerOptions>;
