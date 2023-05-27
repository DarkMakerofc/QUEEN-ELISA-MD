import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@smithy/protocol-http";
import { SerdeContext as __SerdeContext } from "@smithy/types";
import {
  CreateTokenCommandInput,
  CreateTokenCommandOutput,
} from "../commands/CreateTokenCommand";
import {
  RegisterClientCommandInput,
  RegisterClientCommandOutput,
} from "../commands/RegisterClientCommand";
import {
  StartDeviceAuthorizationCommandInput,
  StartDeviceAuthorizationCommandOutput,
} from "../commands/StartDeviceAuthorizationCommand";
export declare const se_CreateTokenCommand: (
  input: CreateTokenCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_RegisterClientCommand: (
  input: RegisterClientCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_StartDeviceAuthorizationCommand: (
  input: StartDeviceAuthorizationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const de_CreateTokenCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateTokenCommandOutput>;
export declare const de_RegisterClientCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<RegisterClientCommandOutput>;
export declare const de_StartDeviceAuthorizationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<StartDeviceAuthorizationCommandOutput>;
