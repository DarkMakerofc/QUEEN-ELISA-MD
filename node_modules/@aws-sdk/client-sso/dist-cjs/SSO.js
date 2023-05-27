"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SSO = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
const GetRoleCredentialsCommand_1 = require("./commands/GetRoleCredentialsCommand");
const ListAccountRolesCommand_1 = require("./commands/ListAccountRolesCommand");
const ListAccountsCommand_1 = require("./commands/ListAccountsCommand");
const LogoutCommand_1 = require("./commands/LogoutCommand");
const SSOClient_1 = require("./SSOClient");
const commands = {
    GetRoleCredentialsCommand: GetRoleCredentialsCommand_1.GetRoleCredentialsCommand,
    ListAccountRolesCommand: ListAccountRolesCommand_1.ListAccountRolesCommand,
    ListAccountsCommand: ListAccountsCommand_1.ListAccountsCommand,
    LogoutCommand: LogoutCommand_1.LogoutCommand,
};
class SSO extends SSOClient_1.SSOClient {
}
exports.SSO = SSO;
(0, smithy_client_1.createAggregatedClient)(commands, SSO);
