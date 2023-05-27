import { Readable } from "stream";
const MIN_WAIT_TIME = 1000;
export async function writeRequestBody(httpRequest, request, maxContinueTimeoutMs = MIN_WAIT_TIME) {
    const headers = request.headers ?? {};
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
function writeBody(httpRequest, body) {
    if (body instanceof Readable) {
        body.pipe(httpRequest);
    }
    else if (body) {
        httpRequest.end(Buffer.from(body));
    }
    else {
        httpRequest.end();
    }
}
