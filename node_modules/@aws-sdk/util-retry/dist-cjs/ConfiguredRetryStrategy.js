"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfiguredRetryStrategy = void 0;
const constants_1 = require("./constants");
const StandardRetryStrategy_1 = require("./StandardRetryStrategy");
class ConfiguredRetryStrategy extends StandardRetryStrategy_1.StandardRetryStrategy {
    constructor(maxAttempts, computeNextBackoffDelay = constants_1.DEFAULT_RETRY_DELAY_BASE) {
        super(typeof maxAttempts === "function" ? maxAttempts : async () => maxAttempts);
        if (typeof computeNextBackoffDelay === "number") {
            this.computeNextBackoffDelay = () => computeNextBackoffDelay;
        }
        else {
            this.computeNextBackoffDelay = computeNextBackoffDelay;
        }
    }
    async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
        const token = await super.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
        token.getRetryDelay = () => this.computeNextBackoffDelay(token.getRetryCount());
        return token;
    }
}
exports.ConfiguredRetryStrategy = ConfiguredRetryStrategy;
