export declare function wallpaper(query: string): Promise<string[]>;
declare type Ioptionsv2 = {
    page: number;
    is4K?: boolean;
};
export declare function wallpaperv2(query: string, { page, is4K }?: Ioptionsv2): Promise<string[]>;
export declare function wallpaperv3(query: string, page?: number): Promise<string[]>;
export {};
//# sourceMappingURL=wallpaper.d.ts.map