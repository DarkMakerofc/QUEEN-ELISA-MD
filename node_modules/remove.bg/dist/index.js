"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const unirest = require("unirest");
const API_ENDPOINT = "https://api.remove.bg/v1.0/removebg";
const API_KEY_HEADER = "X-Api-Key";
function removeBackgroundFromImageUrl(options) {
    return new Promise((resolve, reject) => {
        const requestOptions = getRequestOptions(options);
        requestOptions["image_url"] = options.url;
        getPost(options)
            .header("Content-Type", "application/json")
            .send(requestOptions)
            .end(result => processResult(result, options, resolve, reject));
    });
}
exports.removeBackgroundFromImageUrl = removeBackgroundFromImageUrl;
function removeBackgroundFromImageFile(options) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            const request = getPost(options);
            const requestOptions = getRequestOptions(options);
            for (let k in requestOptions) {
                request.field(k, requestOptions[k]);
            }
            request
                .attach("image_file", fs.createReadStream(options.path))
                .end(result => processResult(result, options, resolve, reject));
        });
    });
}
exports.removeBackgroundFromImageFile = removeBackgroundFromImageFile;
function removeBackgroundFromImageBase64(options) {
    return new Promise((resolve, reject) => {
        const requestOptions = getRequestOptions(options);
        requestOptions["image_file_b64"] = options.base64img;
        getPost(options)
            .header("Content-Type", "application/json")
            .send(requestOptions)
            .end(result => processResult(result, options, resolve, reject));
    });
}
exports.removeBackgroundFromImageBase64 = removeBackgroundFromImageBase64;
function getRequestOptions(options) {
    return {
        "size": options.size || "preview",
        "type": options.type || "auto",
        "scale": options.scale,
        "position": options.position,
        "crop": options.crop === true,
        "crop_margin": options.crop_margin,
        "roi": options.roi,
        "bg_color": options.bg_color,
        "bg_image_url": options.bg_image_url,
        "channels": options.channels,
        "add_shadow": options.add_shadow
    };
}
function getPost(options) {
    return unirest
        .post(API_ENDPOINT)
        .header(API_KEY_HEADER, options.apiKey)
        .header("Accept", "application/json");
}
function processResult(result, options, resolve, reject) {
    return __awaiter(this, void 0, void 0, function* () {
        if (result.status === 200) {
            if (options.outputFile) {
                fs.writeFileSync(options.outputFile, result.body.data.result_b64, { encoding: "base64" });
            }
            resolve({
                base64img: result.body.data.result_b64,
                creditsCharged: result.headers["x-credits-charged"],
                detectedType: result.headers["x-type"],
                resultWidth: result.headers["x-width"],
                resultHeight: result.headers["x-height"],
                rateLimit: result.headers["x-ratelimit-limit"],
                rateLimitRemaining: result.headers["x-ratelimit-remaining"],
                rateLimitReset: result.headers["x-ratelimit-reset"],
                retryAfter: result.headers["retry-after"]
            });
        }
        else {
            reject((result.body && result.body.errors ? result.body.errors : result.body));
        }
    });
}
