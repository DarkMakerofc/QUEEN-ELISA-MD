export interface AbortHandler {
  (this: AbortSignal, ev: any): any;
}
export interface AbortSignal {
  readonly aborted: boolean;
  onabort: AbortHandler | Function | null;
}
export interface AbortController {
  readonly signal: AbortSignal;
  abort(): void;
}
