"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tebaklirikjson = void 0;
const got_1 = __importDefault(require("got"));
async function tebaklirik() {
    if (!exports.tebaklirikjson) {
        exports.tebaklirikjson = await (0, got_1.default)('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json').json();
    }
    return exports.tebaklirikjson[Math.floor(Math.random() * exports.tebaklirikjson.length)];
}
exports.default = tebaklirik;
//# sourceMappingURL=tebaklirik.js.map