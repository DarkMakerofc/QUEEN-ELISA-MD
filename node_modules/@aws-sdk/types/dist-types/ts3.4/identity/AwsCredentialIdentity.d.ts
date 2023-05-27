import { Identity, IdentityProvider } from "./Identity";
export interface AwsCredentialIdentity extends Identity {
  readonly accessKeyId: string;
  readonly secretAccessKey: string;
  readonly sessionToken?: string;
}
export type AwsCredentialIdentityProvider =
  IdentityProvider<AwsCredentialIdentity>;
