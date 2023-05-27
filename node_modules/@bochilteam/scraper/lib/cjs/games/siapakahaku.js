"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.siapakahakujson = void 0;
const got_1 = __importDefault(require("got"));
async function siapakahaku() {
    if (!exports.siapakahakujson) {
        exports.siapakahakujson = await (0, got_1.default)('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json').json();
    }
    return exports.siapakahakujson[Math.floor(Math.random() * exports.siapakahakujson.length)];
}
exports.default = siapakahaku;
//# sourceMappingURL=siapakahaku.js.map