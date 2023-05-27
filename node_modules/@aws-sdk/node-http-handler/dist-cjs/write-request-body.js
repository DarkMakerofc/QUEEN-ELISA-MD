"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeRequestBody = void 0;
const stream_1 = require("stream");
const MIN_WAIT_TIME = 1000;
async function writeRequestBody(httpRequest, request, maxContinueTimeoutMs = MIN_WAIT_TIME) {
    var _a;
    const headers = (_a = request.headers) !== null && _a !== void 0 ? _a : {};
    const expect = headers["Expect"] || headers["expect"];
    if (expect === "100-continue") {
        await Promise.race([
            new Promise((resolve) => {
                setTimeout(resolve, Math.max(MIN_WAIT_TIME, maxContinueTimeoutMs));
            }),
            new Promise((resolve) => {
                httpRequest.on("continue", () => {
                    resolve();
                });
            }),
        ]);
    }
    writeBody(httpRequest, request.body);
}
exports.writeRequestBody = writeRequestBody;
function writeBody(httpRequest, body) {
    if (body instanceof stream_1.Readable) {
        body.pipe(httpRequest);
    }
    else if (body) {
        httpRequest.end(Buffer.from(body));
    }
    else {
        httpRequest.end();
    }
}
