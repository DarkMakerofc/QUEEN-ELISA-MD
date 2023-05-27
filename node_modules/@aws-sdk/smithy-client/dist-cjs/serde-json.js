"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._json = void 0;
const _json = (obj) => {
    if (obj == null) {
        return {};
    }
    if (Array.isArray(obj)) {
        return obj.filter((_) => _ != null);
    }
    if (typeof obj === "object") {
        const target = {};
        for (const key of Object.keys(obj)) {
            if (obj[key] == null) {
                continue;
            }
            target[key] = (0, exports._json)(obj[key]);
        }
        return target;
    }
    return obj;
};
exports._json = _json;
