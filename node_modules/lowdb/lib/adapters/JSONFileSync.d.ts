import { SyncAdapter } from '../LowSync.js';
export declare class JSONFileSync<T> implements SyncAdapter<T> {
    private adapter;
    constructor(filename: string);
    read(): T | null;
    write(obj: T): void;
}
