import { AwsCredentialIdentity } from "@aws-sdk/types";
import { ProcessCredentials } from "./ProcessCredentials";
/**
 * @internal
 */
export declare const getValidatedProcessCredentials: (profileName: string, data: ProcessCredentials) => AwsCredentialIdentity;
