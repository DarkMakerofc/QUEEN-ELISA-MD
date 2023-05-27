import { AwsCredentialIdentity, ParsedIniData } from "@aws-sdk/types";
/**
 * @internal
 */
export declare const resolveProcessCredentials: (profileName: string, profiles: ParsedIniData) => Promise<AwsCredentialIdentity>;
