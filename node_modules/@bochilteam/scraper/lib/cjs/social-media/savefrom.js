"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const got_1 = __importDefault(require("got"));
const vm_1 = __importDefault(require("vm"));
const utils_js_1 = require("../utils.js");
async function savefrom(url) {
    var _a, _b;
    let scriptJS = await (0, got_1.default)('https://worker.sf-tools.com/savefrom.php', {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            origin: 'https://id.savefrom.net',
            referer: 'https://id.savefrom.net/',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36'
        },
        form: {
            sf_url: encodeURI(url),
            sf_submit: '',
            new: 2,
            lang: 'id',
            app: '',
            country: 'id',
            os: 'Windows',
            browser: 'Chrome',
            channel: ' main',
            'sf-nomad': 1
        }
    }).text();
    const executeCode = '[]["filter"]["constructor"](b).call(a);';
    if (scriptJS.indexOf(executeCode) === -1)
        throw new utils_js_1.ScraperError(`Cannot find execute code\n${scriptJS}`);
    scriptJS = scriptJS.replace(executeCode, `
try {
  i++;
  if (i === 2) scriptResult = ${executeCode.split('.call')[0]}.toString();
  else (
    ${executeCode.replace(/;/, '')}
    );
} catch {}
`);
    const context = {
        scriptResult: '',
        i: 0
    };
    vm_1.default.createContext(context);
    new vm_1.default.Script(scriptJS).runInContext(context);
    const json = JSON.parse((_b = (_a = context.scriptResult.split('window.parent.sf.videoResult.show(')) === null || _a === void 0 ? void 0 : _a[1].split(');')) === null || _b === void 0 ? void 0 : _b[0]);
    return json;
}
exports.default = savefrom;
//# sourceMappingURL=savefrom.js.map