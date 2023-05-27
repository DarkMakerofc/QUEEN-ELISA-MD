"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeSnapApp = exports.ScraperError = void 0;
class ScraperError extends Error {
    constructor(message, options) {
        super(message);
        this.name = 'ScraperError';
        this.date = new Date();
        this.message =
            message +
                '\n\nIf this is bug pls report to https://github.com/BochilTeam/scraper';
    }
    static createError(message, options) {
        return new ScraperError(message, options);
    }
}
exports.ScraperError = ScraperError;
function decodeSnapApp(...args) {
    // From reponse snap app
    function _0xe78c(d, e, f) {
        const g = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/'.split('');
        const h = g.slice(0, e);
        const i = g.slice(0, f);
        // @ts-ignore
        // eslint-disable-next-line array-callback-return
        let j = d.split('').reverse().reduce(function (a, b, c) {
            // eslint-disable-next-line no-return-assign
            if (h.indexOf(b) !== -1)
                return a += h.indexOf(b) * (Math.pow(e, c));
        }, 0);
        let k = '';
        while (j > 0) {
            k = i[j % f] + k;
            j = (j - (j % f)) / f;
        }
        return k || '0';
    }
    function _0xc60e(h, u, n, t, e, r) {
        r = '';
        for (let i = 0, len = h.length; i < len; i++) {
            let s = '';
            while (h[i] !== n[e]) {
                s += h[i];
                i++;
            }
            for (let j = 0; j < n.length; j++) {
                s = s.replace(new RegExp(n[j], 'g'), j.toString());
            }
            // @ts-ignore
            r += String.fromCharCode((_0xe78c(s, e, 10) - t));
        }
        return decodeURIComponent(encodeURIComponent(r));
    }
    // @ts-ignore
    return _0xc60e(...args);
}
exports.decodeSnapApp = decodeSnapApp;
//# sourceMappingURL=utils.js.map