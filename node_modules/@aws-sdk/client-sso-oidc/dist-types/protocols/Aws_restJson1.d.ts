import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { SerdeContext as __SerdeContext } from "@smithy/types";
import { CreateTokenCommandInput, CreateTokenCommandOutput } from "../commands/CreateTokenCommand";
import { RegisterClientCommandInput, RegisterClientCommandOutput } from "../commands/RegisterClientCommand";
import { StartDeviceAuthorizationCommandInput, StartDeviceAuthorizationCommandOutput } from "../commands/StartDeviceAuthorizationCommand";
/**
 * serializeAws_restJson1CreateTokenCommand
 */
export declare const se_CreateTokenCommand: (input: CreateTokenCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1RegisterClientCommand
 */
export declare const se_RegisterClientCommand: (input: RegisterClientCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_restJson1StartDeviceAuthorizationCommand
 */
export declare const se_StartDeviceAuthorizationCommand: (input: StartDeviceAuthorizationCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * deserializeAws_restJson1CreateTokenCommand
 */
export declare const de_CreateTokenCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateTokenCommandOutput>;
/**
 * deserializeAws_restJson1RegisterClientCommand
 */
export declare const de_RegisterClientCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<RegisterClientCommandOutput>;
/**
 * deserializeAws_restJson1StartDeviceAuthorizationCommand
 */
export declare const de_StartDeviceAuthorizationCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<StartDeviceAuthorizationCommandOutput>;
