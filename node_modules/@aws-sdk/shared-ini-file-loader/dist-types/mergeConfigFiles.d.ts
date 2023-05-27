import { ParsedIniData } from "@aws-sdk/types";
/**
 * Merge multiple profile config files such that settings each file are kept together
 *
 * @internal
 */
export declare const mergeConfigFiles: (...files: ParsedIniData[]) => ParsedIniData;
