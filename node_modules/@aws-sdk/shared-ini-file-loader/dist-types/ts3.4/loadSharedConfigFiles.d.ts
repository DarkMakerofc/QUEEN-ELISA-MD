import { SharedConfigFiles } from "@aws-sdk/types";
export interface SharedConfigInit {
  filepath?: string;
  configFilepath?: string;
  ignoreCache?: boolean;
}
export declare const loadSharedConfigFiles: (
  init?: SharedConfigInit
) => Promise<SharedConfigFiles>;
