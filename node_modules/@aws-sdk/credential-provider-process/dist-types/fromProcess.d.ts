import { SourceProfileInit } from "@aws-sdk/shared-ini-file-loader";
import { AwsCredentialIdentityProvider } from "@aws-sdk/types";
/**
 * @internal
 */
export interface FromProcessInit extends SourceProfileInit {
}
/**
 * @internal
 *
 * Creates a credential provider that will read from a credential_process specified
 * in ini files.
 */
export declare const fromProcess: (init?: FromProcessInit) => AwsCredentialIdentityProvider;
