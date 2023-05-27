"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.alquran = void 0;
const got_1 = __importDefault(require("got"));
async function alquran() {
    const data = await (0, got_1.default)('https://raw.githubusercontent.com/rzkytmgr/quran-api/master/data/quran.json').json();
    return data;
}
exports.alquran = alquran;
//# sourceMappingURL=alquran.js.map