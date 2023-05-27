import { AwsCredentialIdentity, Profile } from "@aws-sdk/types";
/**
 * @internal
 */
export interface StaticCredsProfile extends Profile {
    aws_access_key_id: string;
    aws_secret_access_key: string;
    aws_session_token?: string;
}
/**
 * @internal
 */
export declare const isStaticCredsProfile: (arg: any) => arg is StaticCredsProfile;
/**
 * @internal
 */
export declare const resolveStaticCredentials: (profile: StaticCredsProfile) => Promise<AwsCredentialIdentity>;
