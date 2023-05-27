import { Identity, IdentityProvider } from "./Identity";
export interface TokenIdentity extends Identity {
  readonly token: string;
}
export type TokenIdentityProvider = IdentityProvider<TokenIdentity>;
