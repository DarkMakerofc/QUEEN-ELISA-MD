"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parser = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const jsdom_1 = require("jsdom");
const BASE_URL = "https://emojipedia.org";
class Parser {
    static async getHTML(emoji) {
        try {
            const data = await node_fetch_1.default(`${BASE_URL}/${encodeURIComponent(emoji)}`);
            const res = await data.text();
            return res;
        }
        catch {
            return null;
        }
    }
    static fetchData(html) {
        const { document } = new jsdom_1.JSDOM(html).window;
        const res = {
            emoji: document.title.split(" ")[0],
            unicode: Parser.emojiUnicode(document.title.split(" ")[0]),
            name: html.split(`<h1><span class="emoji">${document.title.split(" ")[0]}</span>`)[1].split("</h1>")[0].trim(),
            description: document.querySelector('section[class="description"]').querySelector("p").textContent.trim(),
            images: [],
            shortCodes: []
        };
        const vendors = document.getElementsByClassName("vendor-rollout-target");
        for (let i = 0; i < vendors.length; i++) {
            const vendor = vendors[i];
            const title = vendor.querySelector("a").textContent.trim();
            const vendorurl = vendor.querySelector("img").src;
            res.images.push({
                index: i,
                vendor: title,
                url: vendorurl
            });
        }
        const shortcodes = document.querySelector('ul[class="shortcodes"]').querySelectorAll('span[class="shortcode"]');
        for (let i = 0; i < shortcodes.length; i++) {
            let r = shortcodes[i];
            res.shortCodes.push(r.textContent.trim());
        }
        return res;
    }
    static emojiUnicode(emoji) {
        if (emoji.length === 1)
            return emoji.charCodeAt(0).toString(16);
        let comp = ((emoji.charCodeAt(0) - 0xD800) * 0x400 + (emoji.charCodeAt(1) - 0xDC00) + 0x10000);
        if (comp < 0)
            return emoji.charCodeAt(0).toString(16);
        return comp.toString(16);
    }
}
exports.Parser = Parser;
