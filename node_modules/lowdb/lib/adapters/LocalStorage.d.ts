import { SyncAdapter } from '../LowSync.js';
export declare class LocalStorage<T> implements SyncAdapter<T> {
    private key;
    constructor(key: string);
    read(): T | null;
    write(obj: T): void;
}
