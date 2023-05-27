"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDefaultRetryToken = void 0;
const constants_1 = require("./constants");
const createDefaultRetryToken = ({ retryDelay, retryCount, retryCost, }) => {
    const getRetryCount = () => retryCount;
    const getRetryDelay = () => Math.min(constants_1.MAXIMUM_RETRY_DELAY, retryDelay);
    const getRetryCost = () => retryCost;
    return {
        getRetryCount,
        getRetryDelay,
        getRetryCost,
    };
};
exports.createDefaultRetryToken = createDefaultRetryToken;
