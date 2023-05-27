export function toBase64(data) {
    if (!Buffer.isBuffer(data))
        data = Buffer.from(data);
    return data.toString('base64');
}
export function fromBase64ToString(data) {
    if (/data:.*;base64,/i.test(data))
        data = data.replace(/data:.*;base64,/i, '');
    return Buffer.from(data, 'base64').toString();
}
//# sourceMappingURL=base64.js.map