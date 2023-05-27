"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const got_1 = __importDefault(require("got"));
async function artinama(nama) {
    var _a, _b, _c;
    const data = await (0, got_1.default)(`https://www.primbon.com/arti_nama.php?nama1=${nama}&proses=+Submit%21+`).text();
    const results = (_c = (_b = (_a = data
        .split('<h1>ARTI NAMA</h1><br>')[1]) === null || _a === void 0 ? void 0 : _a.split('<TABLE>')[0]) === null || _b === void 0 ? void 0 : _b.replace(/<(\/)?(h1|br|i|b)>/gim, '')) === null || _c === void 0 ? void 0 : _c.trim();
    return results || '';
}
exports.default = artinama;
//# sourceMappingURL=artinama.js.map