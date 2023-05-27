export interface Adapter<T> {
    read: () => Promise<T | null>;
    write: (data: T) => Promise<void>;
}
export declare class Low<T = unknown> {
    adapter: Adapter<T>;
    data: T | null;
    constructor(adapter: Adapter<T>);
    read(): Promise<void>;
    write(): Promise<void>;
}
