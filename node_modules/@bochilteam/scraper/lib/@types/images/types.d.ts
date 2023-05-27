export interface StickerTelegram {
    title: string;
    icon: string;
    link: string;
    stickers: string[];
}
export interface ResponseStickerLine {
    title: string;
    productUrl: string;
    id: string;
    description?: string;
    payloadForProduct: {
        staticUrl: string;
        animationUrl?: string;
        soundUrl?: string;
    };
    authorId: string;
    authorName: string;
}
export interface StickerLine {
    id: string;
    title: string;
    description?: string;
    url: string;
    sticker: string;
    stickerAnimated?: string;
    stickerSound?: string;
    authorId: string;
    authorName: string;
}
//# sourceMappingURL=types.d.ts.map