import { createAggregatedClient } from "@aws-sdk/smithy-client";
import { CreateTokenCommand } from "./commands/CreateTokenCommand";
import { RegisterClientCommand, } from "./commands/RegisterClientCommand";
import { StartDeviceAuthorizationCommand, } from "./commands/StartDeviceAuthorizationCommand";
import { SSOOIDCClient } from "./SSOOIDCClient";
const commands = {
    CreateTokenCommand,
    RegisterClientCommand,
    StartDeviceAuthorizationCommand,
};
export class SSOOIDC extends SSOOIDCClient {
}
createAggregatedClient(commands, SSOOIDC);
