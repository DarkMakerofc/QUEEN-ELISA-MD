import type { InstagramDownloader, InstagramDownloaderV2, InstagramDownloaderV4, InstagramStory, InstagramStoryv2, InstagramStalk } from './types';
export declare function instagramdl(url: string): Promise<InstagramDownloader[]>;
export declare function instagramdlv2(url: string): Promise<InstagramDownloaderV2[]>;
export declare function instagramdlv3(url: string): Promise<InstagramDownloaderV2[]>;
export declare function instagramdlv4(url: string): Promise<InstagramDownloaderV4[]>;
export declare function instagramStory(name: string): Promise<InstagramStory>;
export declare function instagramStoryv2(name: string): Promise<InstagramStoryv2>;
export declare function instagramStalk(username: string): Promise<InstagramStalk>;
//# sourceMappingURL=instagram.d.ts.map