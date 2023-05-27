"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emoji = exports.Parser = exports.EmojiAPI = void 0;
const Parser_1 = require("./Parser");
Object.defineProperty(exports, "Parser", { enumerable: true, get: function () { return Parser_1.Parser; } });
const Emoji_1 = require("./Emoji");
Object.defineProperty(exports, "Emoji", { enumerable: true, get: function () { return Emoji_1.Emoji; } });
class EmojiAPI {
    async get(emoji) {
        const basicInfo = await this.getBasicInfo(emoji);
        return new Emoji_1.Emoji(basicInfo || {});
    }
    async getBasicInfo(emoji) {
        try {
            const raw = await Parser_1.Parser.getHTML(emoji);
            if (!raw)
                return null;
            const basicInfo = Parser_1.Parser.fetchData(raw);
            return basicInfo;
        }
        catch {
            return null;
        }
    }
    EmojiToUnicode(emoji) {
        return Parser_1.Parser.emojiUnicode(emoji);
    }
    UnicodeToEmoji(unicode) {
        return String.fromCodePoint(parseInt(unicode, 16));
    }
}
exports.EmojiAPI = EmojiAPI;
exports.default = EmojiAPI;
