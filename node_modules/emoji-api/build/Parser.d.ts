export interface EmojiRawData {
    emoji: string;
    unicode: string;
    name: string;
    description: string;
    images: EmojiImage[];
    shortCodes: string[];
}
export interface EmojiImage {
    index: number;
    vendor: string;
    url: string;
}
export declare class Parser {
    static getHTML(emoji: string): Promise<string>;
    static fetchData(html: string): EmojiRawData;
    static emojiUnicode(emoji: string): string;
}
