"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SSOOIDC = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
const CreateTokenCommand_1 = require("./commands/CreateTokenCommand");
const RegisterClientCommand_1 = require("./commands/RegisterClientCommand");
const StartDeviceAuthorizationCommand_1 = require("./commands/StartDeviceAuthorizationCommand");
const SSOOIDCClient_1 = require("./SSOOIDCClient");
const commands = {
    CreateTokenCommand: CreateTokenCommand_1.CreateTokenCommand,
    RegisterClientCommand: RegisterClientCommand_1.RegisterClientCommand,
    StartDeviceAuthorizationCommand: StartDeviceAuthorizationCommand_1.StartDeviceAuthorizationCommand,
};
class SSOOIDC extends SSOOIDCClient_1.SSOOIDCClient {
}
exports.SSOOIDC = SSOOIDC;
(0, smithy_client_1.createAggregatedClient)(commands, SSOOIDC);
