export declare const loadConfigsForDefaultMode: (
  mode: ResolvedDefaultsMode
) => DefaultsModeConfigs;
export type DefaultsMode =
  | "standard"
  | "in-region"
  | "cross-region"
  | "mobile"
  | "auto"
  | "legacy";
export type ResolvedDefaultsMode = Exclude<DefaultsMode, "auto">;
export interface DefaultsModeConfigs {
  retryMode?: string;
  connectionTimeout?: number;
  requestTimeout?: number;
}
