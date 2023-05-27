"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCrtAvailable = void 0;
const isCrtAvailable = () => {
    try {
        if (typeof require === "function" && typeof module !== "undefined" && require("aws-crt")) {
            return ["md/crt-avail"];
        }
        return null;
    }
    catch (e) {
        return null;
    }
};
exports.isCrtAvailable = isCrtAvailable;
