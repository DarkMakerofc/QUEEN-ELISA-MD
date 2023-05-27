import { AbortHandler, AbortSignal as IAbortSignal } from "@aws-sdk/types";
export { AbortHandler, IAbortSignal };
export declare class AbortSignal implements IAbortSignal {
  onabort: AbortHandler | null;
  private _aborted;
  constructor();
  readonly aborted: boolean;
  abort(): void;
}
