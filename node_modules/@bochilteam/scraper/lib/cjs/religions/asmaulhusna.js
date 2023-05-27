"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.asmaulhusnajson = void 0;
const got_1 = __importDefault(require("got"));
async function asmaulhusna() {
    if (!exports.asmaulhusnajson) {
        exports.asmaulhusnajson = await (0, got_1.default)('https://raw.githubusercontent.com/BochilTeam/database/master/religi/asmaulhusna.json').json();
    }
    return exports.asmaulhusnajson[Math.floor(Math.random() * exports.asmaulhusnajson.length)];
}
exports.default = asmaulhusna;
//# sourceMappingURL=asmaulhusna.js.map