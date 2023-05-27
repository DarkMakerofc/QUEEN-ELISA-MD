"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setSocketKeepAlive = void 0;
const setSocketKeepAlive = (request, { keepAlive, keepAliveMsecs }) => {
    if (keepAlive !== true) {
        return;
    }
    request.on("socket", (socket) => {
        socket.setKeepAlive(keepAlive, keepAliveMsecs || 0);
    });
};
exports.setSocketKeepAlive = setSocketKeepAlive;
