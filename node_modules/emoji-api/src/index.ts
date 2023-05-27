import { Parser, EmojiRawData, EmojiImage } from "./Parser"
import { Emoji } from "./Emoji";

class EmojiAPI {

    async get(emoji: string): Promise<Emoji> {
        const basicInfo = await this.getBasicInfo(emoji);

        return new Emoji(basicInfo || {});
    }

    async getBasicInfo(emoji: string): Promise<EmojiRawData> {
        try {
            const raw = await Parser.getHTML(emoji);
            if (!raw) return null;
            const basicInfo = Parser.fetchData(raw);

            return basicInfo;
        } catch {
            return null;
        }
    }

    EmojiToUnicode(emoji: string) {
        return Parser.emojiUnicode(emoji);
    }

    UnicodeToEmoji(unicode: string) {
        return String.fromCodePoint(parseInt(unicode, 16));
    }

}

export { EmojiAPI, Parser, EmojiRawData, EmojiImage, Emoji }
export default EmojiAPI;