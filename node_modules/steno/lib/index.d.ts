export declare class Writer {
    private filename;
    private tempFilename;
    private locked;
    private prev;
    private next;
    private nextPromise;
    private nextData;
    private _add;
    private _write;
    constructor(filename: string);
    write(data: string): Promise<void>;
}
