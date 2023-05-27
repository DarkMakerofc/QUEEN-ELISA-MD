import { SyncAdapter } from '../LowSync.js';
export declare class TextFileSync implements SyncAdapter<string> {
    private tempFilename;
    private filename;
    constructor(filename: string);
    read(): string | null;
    write(str: string): void;
}
