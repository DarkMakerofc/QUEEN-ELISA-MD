"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CognitoIdentity = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
const CognitoIdentityClient_1 = require("./CognitoIdentityClient");
const CreateIdentityPoolCommand_1 = require("./commands/CreateIdentityPoolCommand");
const DeleteIdentitiesCommand_1 = require("./commands/DeleteIdentitiesCommand");
const DeleteIdentityPoolCommand_1 = require("./commands/DeleteIdentityPoolCommand");
const DescribeIdentityCommand_1 = require("./commands/DescribeIdentityCommand");
const DescribeIdentityPoolCommand_1 = require("./commands/DescribeIdentityPoolCommand");
const GetCredentialsForIdentityCommand_1 = require("./commands/GetCredentialsForIdentityCommand");
const GetIdCommand_1 = require("./commands/GetIdCommand");
const GetIdentityPoolRolesCommand_1 = require("./commands/GetIdentityPoolRolesCommand");
const GetOpenIdTokenCommand_1 = require("./commands/GetOpenIdTokenCommand");
const GetOpenIdTokenForDeveloperIdentityCommand_1 = require("./commands/GetOpenIdTokenForDeveloperIdentityCommand");
const GetPrincipalTagAttributeMapCommand_1 = require("./commands/GetPrincipalTagAttributeMapCommand");
const ListIdentitiesCommand_1 = require("./commands/ListIdentitiesCommand");
const ListIdentityPoolsCommand_1 = require("./commands/ListIdentityPoolsCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const LookupDeveloperIdentityCommand_1 = require("./commands/LookupDeveloperIdentityCommand");
const MergeDeveloperIdentitiesCommand_1 = require("./commands/MergeDeveloperIdentitiesCommand");
const SetIdentityPoolRolesCommand_1 = require("./commands/SetIdentityPoolRolesCommand");
const SetPrincipalTagAttributeMapCommand_1 = require("./commands/SetPrincipalTagAttributeMapCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UnlinkDeveloperIdentityCommand_1 = require("./commands/UnlinkDeveloperIdentityCommand");
const UnlinkIdentityCommand_1 = require("./commands/UnlinkIdentityCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateIdentityPoolCommand_1 = require("./commands/UpdateIdentityPoolCommand");
const commands = {
    CreateIdentityPoolCommand: CreateIdentityPoolCommand_1.CreateIdentityPoolCommand,
    DeleteIdentitiesCommand: DeleteIdentitiesCommand_1.DeleteIdentitiesCommand,
    DeleteIdentityPoolCommand: DeleteIdentityPoolCommand_1.DeleteIdentityPoolCommand,
    DescribeIdentityCommand: DescribeIdentityCommand_1.DescribeIdentityCommand,
    DescribeIdentityPoolCommand: DescribeIdentityPoolCommand_1.DescribeIdentityPoolCommand,
    GetCredentialsForIdentityCommand: GetCredentialsForIdentityCommand_1.GetCredentialsForIdentityCommand,
    GetIdCommand: GetIdCommand_1.GetIdCommand,
    GetIdentityPoolRolesCommand: GetIdentityPoolRolesCommand_1.GetIdentityPoolRolesCommand,
    GetOpenIdTokenCommand: GetOpenIdTokenCommand_1.GetOpenIdTokenCommand,
    GetOpenIdTokenForDeveloperIdentityCommand: GetOpenIdTokenForDeveloperIdentityCommand_1.GetOpenIdTokenForDeveloperIdentityCommand,
    GetPrincipalTagAttributeMapCommand: GetPrincipalTagAttributeMapCommand_1.GetPrincipalTagAttributeMapCommand,
    ListIdentitiesCommand: ListIdentitiesCommand_1.ListIdentitiesCommand,
    ListIdentityPoolsCommand: ListIdentityPoolsCommand_1.ListIdentityPoolsCommand,
    ListTagsForResourceCommand: ListTagsForResourceCommand_1.ListTagsForResourceCommand,
    LookupDeveloperIdentityCommand: LookupDeveloperIdentityCommand_1.LookupDeveloperIdentityCommand,
    MergeDeveloperIdentitiesCommand: MergeDeveloperIdentitiesCommand_1.MergeDeveloperIdentitiesCommand,
    SetIdentityPoolRolesCommand: SetIdentityPoolRolesCommand_1.SetIdentityPoolRolesCommand,
    SetPrincipalTagAttributeMapCommand: SetPrincipalTagAttributeMapCommand_1.SetPrincipalTagAttributeMapCommand,
    TagResourceCommand: TagResourceCommand_1.TagResourceCommand,
    UnlinkDeveloperIdentityCommand: UnlinkDeveloperIdentityCommand_1.UnlinkDeveloperIdentityCommand,
    UnlinkIdentityCommand: UnlinkIdentityCommand_1.UnlinkIdentityCommand,
    UntagResourceCommand: UntagResourceCommand_1.UntagResourceCommand,
    UpdateIdentityPoolCommand: UpdateIdentityPoolCommand_1.UpdateIdentityPoolCommand,
};
class CognitoIdentity extends CognitoIdentityClient_1.CognitoIdentityClient {
}
exports.CognitoIdentity = CognitoIdentity;
(0, smithy_client_1.createAggregatedClient)(commands, CognitoIdentity);
