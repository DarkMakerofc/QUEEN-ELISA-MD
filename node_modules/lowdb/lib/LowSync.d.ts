export interface SyncAdapter<T> {
    read: () => T | null;
    write: (data: T) => void;
}
export declare class LowSync<T = unknown> {
    adapter: SyncAdapter<T>;
    data: T | null;
    constructor(adapter: SyncAdapter<T>);
    read(): void;
    write(): void;
}
