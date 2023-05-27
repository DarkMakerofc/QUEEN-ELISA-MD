import { Parser, EmojiRawData, EmojiImage } from "./Parser";
import { Emoji } from "./Emoji";
declare class EmojiAPI {
    get(emoji: string): Promise<Emoji>;
    getBasicInfo(emoji: string): Promise<EmojiRawData>;
    EmojiToUnicode(emoji: string): string;
    UnicodeToEmoji(unicode: string): string;
}
export { EmojiAPI, Parser, EmojiRawData, EmojiImage, Emoji };
export default EmojiAPI;
