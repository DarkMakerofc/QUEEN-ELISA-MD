export declare class ScraperError extends Error {
    readonly date: Date;
    constructor(message: any, options?: {});
    static createError(message: any, options: {}): ScraperError;
}
export declare function decodeSnapApp(...args: string[] | number[]): string;
//# sourceMappingURL=utils.d.ts.map