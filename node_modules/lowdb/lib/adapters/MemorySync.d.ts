import { SyncAdapter } from '../LowSync.js';
export declare class MemorySync<T> implements SyncAdapter<T> {
    private data;
    read(): T | null;
    write(obj: T): void;
}
