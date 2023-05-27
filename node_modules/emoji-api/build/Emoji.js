"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emoji = void 0;
class Emoji {
    constructor(data) {
        if (!data)
            throw new Error(`Cannot instantiate ${this.constructor.name} class without data!`);
        this._patch(data);
    }
    _patch(data) {
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
    get Apple() {
        return this.images.find(i => i.vendor.toLowerCase().includes("apple"));
    }
    get Google() {
        return this.images.find(i => i.vendor.toLowerCase().includes("google"));
    }
    get Samsung() {
        return this.images.find(i => i.vendor.toLowerCase().includes("samsung"));
    }
    get Microsoft() {
        return this.images.find(i => i.vendor.toLowerCase().includes("microsoft"));
    }
    get WhatsApp() {
        return this.images.find(i => i.vendor.toLowerCase().includes("whatsapp"));
    }
    get Twitter() {
        return this.images.find(i => i.vendor.toLowerCase().includes("twitter"));
    }
    get Facebook() {
        return this.images.find(i => i.vendor.toLowerCase().includes("facebook"));
    }
    get JoyPixels() {
        return this.images.find(i => i.vendor.toLowerCase().includes("joypixels"));
    }
    get OpenMoji() {
        return this.images.find(i => i.vendor.toLowerCase().includes("openmoji"));
    }
    get Emojidex() {
        return this.images.find(i => i.vendor.toLowerCase().includes("emojidex"));
    }
    get Messenger() {
        return this.images.find(i => i.vendor.toLowerCase().includes("messenger"));
    }
    get LG() {
        return this.images.find(i => i.vendor.toLowerCase().includes("lg"));
    }
    get HTC() {
        return this.images.find(i => i.vendor.toLowerCase().includes("htc"));
    }
    get Mozilla() {
        return this.images.find(i => i.vendor.toLowerCase().includes("mozilla"));
    }
    get SoftBank() {
        return this.images.find(i => i.vendor.toLowerCase().includes("softbank"));
    }
    get Docomo() {
        return this.images.find(i => i.vendor.toLowerCase().includes("docomo"));
    }
    get auByKDDI() {
        return this.images.find(i => i.vendor.toLowerCase().includes("kddi"));
    }
    toArray() {
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
exports.Emoji = Emoji;
