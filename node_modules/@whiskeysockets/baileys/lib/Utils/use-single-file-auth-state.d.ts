import type { Logger } from 'pino';
import type { AuthenticationState } from '../Types';
/**
 * @deprecated use multi file auth state instead please
 * stores the full authentication state in a single JSON file
 *
 * DO NOT USE IN A PROD ENVIRONMENT, only meant to serve as an example
 * */
export declare const useSingleFileAuthState: (filename: string, logger?: Logger<import("pino").LoggerOptions> | undefined) => {
    state: AuthenticationState;
    saveState: () => void;
};
