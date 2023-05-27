import crypto from 'crypto';
export function randomUUID(opts) {
    if (typeof crypto.randomUUID === 'function') {
        return crypto.randomUUID(opts);
    }
    const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate
    let poolPtr = rnds8Pool.length;
    if (poolPtr > rnds8Pool.length - 16) {
        crypto.randomFillSync(rnds8Pool);
        poolPtr = 0;
    }
    // eslint-disable-next-line prefer-const
    let rnds = rnds8Pool.slice(poolPtr, (poolPtr += 16));
    rnds[6] = (rnds[6] & 0x0f) | 0x40;
    rnds[8] = (rnds[8] & 0x3f) | 0x80;
    return serializeUUID(rnds);
}
export function randomBytes(size) {
    return crypto.randomBytes(size).toString('hex');
}
export function createHash(algorithm /* 'md4' | 'md5' | 'sha1' | 'sha256' | 'sha512 */, data) {
    return crypto.createHash(algorithm).update(data).digest('hex');
}
const kHexBytes = [];
for (let i = 0; i < 256; ++i) {
    kHexBytes.push((i + 0x100).toString(16).substr(1));
}
function serializeUUID(buf, offset = 0) {
    return (kHexBytes[buf[offset]] +
        kHexBytes[buf[offset + 1]] +
        kHexBytes[buf[offset + 2]] +
        kHexBytes[buf[offset + 3]] +
        '-' +
        kHexBytes[buf[offset + 4]] +
        kHexBytes[buf[offset + 5]] +
        '-' +
        kHexBytes[(buf[offset + 6] & 0x0f) | 0x40] +
        kHexBytes[buf[offset + 7]] +
        '-' +
        kHexBytes[(buf[offset + 8] & 0x3f) | 0x80] +
        kHexBytes[buf[offset + 9]] +
        '-' +
        kHexBytes[buf[offset + 10]] +
        kHexBytes[buf[offset + 11]] +
        kHexBytes[buf[offset + 12]] +
        kHexBytes[buf[offset + 13]] +
        kHexBytes[buf[offset + 14]] +
        kHexBytes[buf[offset + 15]]).toLowerCase();
}
//# sourceMappingURL=crypto.js.map