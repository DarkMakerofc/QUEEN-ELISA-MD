"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listJadwalSholat = exports.jadwalsholat = exports.asmaulhusnajson = exports.asmaulhusna = void 0;
const asmaulhusna_js_1 = __importStar(require("./asmaulhusna.js"));
exports.asmaulhusna = asmaulhusna_js_1.default;
Object.defineProperty(exports, "asmaulhusnajson", { enumerable: true, get: function () { return asmaulhusna_js_1.asmaulhusnajson; } });
const jadwalsholat_js_1 = __importStar(require("./jadwalsholat.js"));
exports.jadwalsholat = jadwalsholat_js_1.default;
Object.defineProperty(exports, "listJadwalSholat", { enumerable: true, get: function () { return jadwalsholat_js_1.listJadwalSholat; } });
__exportStar(require("./alquran.js"), exports);
//# sourceMappingURL=index.js.map