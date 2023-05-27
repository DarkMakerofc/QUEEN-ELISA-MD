import { EmojiImage } from "./Parser";

class Emoji {
    emoji?: string;
    unicode?: string;
    name?: string;
    description?: string;
    images: EmojiImage[];
    shortCodes: string[];

    constructor(data: any) {
        if (!data) throw new Error(`Cannot instantiate ${this.constructor.name} class without data!`);
        this._patch(data);
    }

    _patch(data: any) {
        this.emoji = data.emoji || null;
        this.unicode = data.unicode ? `U+${String(data.unicode).toUpperCase()}` : null;
        this.name = data.name || null;
        this.description = data.description || null;
        this.images = data.images || [];
        this.shortCodes = data.shortCodes || [];
    }

    get encodeURI() {
        return encodeURIComponent(this.emoji || "");
    }

    get Apple(): EmojiImage {
        return this.images.find(i => i.vendor.toLowerCase().includes("apple"));
    }

    get Google(): EmojiImage {
        return this.images.find(i => i.vendor.toLowerCase().includes("google"));
    }

    get Samsung(): EmojiImage {
        return this.images.find(i => i.vendor.toLowerCase().includes("samsung"));
    }

    get Microsoft(): EmojiImage {
        return this.images.find(i => i.vendor.toLowerCase().includes("microsoft"));
    }

    get WhatsApp(): EmojiImage {
        return this.images.find(i => i.vendor.toLowerCase().includes("whatsapp"));
    }

    get Twitter(): EmojiImage {
        return this.images.find(i => i.vendor.toLowerCase().includes("twitter"));
    }

    get Facebook(): EmojiImage {
        return this.images.find(i => i.vendor.toLowerCase().includes("facebook"));
    }

    get JoyPixels(): EmojiImage {
        return this.images.find(i => i.vendor.toLowerCase().includes("joypixels"));
    }

    get OpenMoji(): EmojiImage {
        return this.images.find(i => i.vendor.toLowerCase().includes("openmoji"));
    }

    get Emojidex(): EmojiImage {
        return this.images.find(i => i.vendor.toLowerCase().includes("emojidex"));
    }

    get Messenger(): EmojiImage {
        return this.images.find(i => i.vendor.toLowerCase().includes("messenger"));
    }

    get LG(): EmojiImage {
        return this.images.find(i => i.vendor.toLowerCase().includes("lg"));
    }

    get HTC(): EmojiImage {
        return this.images.find(i => i.vendor.toLowerCase().includes("htc"));
    }

    get Mozilla(): EmojiImage {
        return this.images.find(i => i.vendor.toLowerCase().includes("mozilla"));
    }

    get SoftBank(): EmojiImage {
        return this.images.find(i => i.vendor.toLowerCase().includes("softbank"));
    }

    get Docomo(): EmojiImage {
        return this.images.find(i => i.vendor.toLowerCase().includes("docomo"));
    }

    get auByKDDI(): EmojiImage {
        return this.images.find(i => i.vendor.toLowerCase().includes("kddi"));
    }

    toArray(): EmojiImage[] {
        return this.images;
    }

    toString() {
        return this.name || "";
    }

    toJSON() {
        return {
            emoji: this.emoji,
            name: this.name,
            unicode: this.unicode,
            description: this.description,
            images: this.images,
            shortCodes: this.shortCodes
        };

    }
}

export { Emoji }