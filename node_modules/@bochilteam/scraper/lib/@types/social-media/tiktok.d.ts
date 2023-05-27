import type { TiktokDownloader, TiktokDownloaderv2, TiktokDownloaderv3, TiktokFyp } from './types';
export declare function tiktokdl(url: string): Promise<TiktokDownloader>;
export declare function tiktokdlv2(url: string): Promise<TiktokDownloaderv2>;
export declare function tiktokdlv3(url: string): Promise<TiktokDownloaderv3>;
export declare function tiktokfyp(): Promise<TiktokFyp[] | []>;
//# sourceMappingURL=tiktok.d.ts.map