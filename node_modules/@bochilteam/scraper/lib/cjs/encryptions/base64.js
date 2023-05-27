"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromBase64ToString = exports.toBase64 = void 0;
function toBase64(data) {
    if (!Buffer.isBuffer(data))
        data = Buffer.from(data);
    return data.toString('base64');
}
exports.toBase64 = toBase64;
function fromBase64ToString(data) {
    if (/data:.*;base64,/i.test(data))
        data = data.replace(/data:.*;base64,/i, '');
    return Buffer.from(data, 'base64').toString();
}
exports.fromBase64ToString = fromBase64ToString;
//# sourceMappingURL=base64.js.map