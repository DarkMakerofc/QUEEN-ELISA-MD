"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STS = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
const AssumeRoleCommand_1 = require("./commands/AssumeRoleCommand");
const AssumeRoleWithSAMLCommand_1 = require("./commands/AssumeRoleWithSAMLCommand");
const AssumeRoleWithWebIdentityCommand_1 = require("./commands/AssumeRoleWithWebIdentityCommand");
const DecodeAuthorizationMessageCommand_1 = require("./commands/DecodeAuthorizationMessageCommand");
const GetAccessKeyInfoCommand_1 = require("./commands/GetAccessKeyInfoCommand");
const GetCallerIdentityCommand_1 = require("./commands/GetCallerIdentityCommand");
const GetFederationTokenCommand_1 = require("./commands/GetFederationTokenCommand");
const GetSessionTokenCommand_1 = require("./commands/GetSessionTokenCommand");
const STSClient_1 = require("./STSClient");
const commands = {
    AssumeRoleCommand: AssumeRoleCommand_1.AssumeRoleCommand,
    AssumeRoleWithSAMLCommand: AssumeRoleWithSAMLCommand_1.AssumeRoleWithSAMLCommand,
    AssumeRoleWithWebIdentityCommand: AssumeRoleWithWebIdentityCommand_1.AssumeRoleWithWebIdentityCommand,
    DecodeAuthorizationMessageCommand: DecodeAuthorizationMessageCommand_1.DecodeAuthorizationMessageCommand,
    GetAccessKeyInfoCommand: GetAccessKeyInfoCommand_1.GetAccessKeyInfoCommand,
    GetCallerIdentityCommand: GetCallerIdentityCommand_1.GetCallerIdentityCommand,
    GetFederationTokenCommand: GetFederationTokenCommand_1.GetFederationTokenCommand,
    GetSessionTokenCommand: GetSessionTokenCommand_1.GetSessionTokenCommand,
};
class STS extends STSClient_1.STSClient {
}
exports.STS = STS;
(0, smithy_client_1.createAggregatedClient)(commands, STS);
