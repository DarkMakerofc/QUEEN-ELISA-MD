"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StandardRetryStrategy = void 0;
const config_1 = require("./config");
const constants_1 = require("./constants");
const defaultRetryBackoffStrategy_1 = require("./defaultRetryBackoffStrategy");
const defaultRetryToken_1 = require("./defaultRetryToken");
class StandardRetryStrategy {
    constructor(maxAttempts) {
        this.maxAttempts = maxAttempts;
        this.mode = config_1.RETRY_MODES.STANDARD;
        this.capacity = constants_1.INITIAL_RETRY_TOKENS;
        this.retryBackoffStrategy = (0, defaultRetryBackoffStrategy_1.getDefaultRetryBackoffStrategy)();
        this.maxAttemptsProvider = typeof maxAttempts === "function" ? maxAttempts : async () => maxAttempts;
    }
    async acquireInitialRetryToken(retryTokenScope) {
        return (0, defaultRetryToken_1.createDefaultRetryToken)({
            retryDelay: constants_1.DEFAULT_RETRY_DELAY_BASE,
            retryCount: 0,
        });
    }
    async refreshRetryTokenForRetry(token, errorInfo) {
        const maxAttempts = await this.getMaxAttempts();
        if (this.shouldRetry(token, errorInfo, maxAttempts)) {
            const errorType = errorInfo.errorType;
            this.retryBackoffStrategy.setDelayBase(errorType === "THROTTLING" ? constants_1.THROTTLING_RETRY_DELAY_BASE : constants_1.DEFAULT_RETRY_DELAY_BASE);
            const delayFromErrorType = this.retryBackoffStrategy.computeNextBackoffDelay(token.getRetryCount());
            const retryDelay = errorInfo.retryAfterHint
                ? Math.max(errorInfo.retryAfterHint.getTime() - Date.now() || 0, delayFromErrorType)
                : delayFromErrorType;
            const capacityCost = this.getCapacityCost(errorType);
            this.capacity -= capacityCost;
            return (0, defaultRetryToken_1.createDefaultRetryToken)({
                retryDelay,
                retryCount: token.getRetryCount() + 1,
                retryCost: capacityCost,
            });
        }
        throw new Error("No retry token available");
    }
    recordSuccess(token) {
        var _a;
        this.capacity = Math.max(constants_1.INITIAL_RETRY_TOKENS, this.capacity + ((_a = token.getRetryCost()) !== null && _a !== void 0 ? _a : constants_1.NO_RETRY_INCREMENT));
    }
    getCapacity() {
        return this.capacity;
    }
    async getMaxAttempts() {
        try {
            return await this.maxAttemptsProvider();
        }
        catch (error) {
            console.warn(`Max attempts provider could not resolve. Using default of ${config_1.DEFAULT_MAX_ATTEMPTS}`);
            return config_1.DEFAULT_MAX_ATTEMPTS;
        }
    }
    shouldRetry(tokenToRenew, errorInfo, maxAttempts) {
        const attempts = tokenToRenew.getRetryCount();
        return (attempts < maxAttempts &&
            this.capacity >= this.getCapacityCost(errorInfo.errorType) &&
            this.isRetryableError(errorInfo.errorType));
    }
    getCapacityCost(errorType) {
        return errorType === "TRANSIENT" ? constants_1.TIMEOUT_RETRY_COST : constants_1.RETRY_COST;
    }
    isRetryableError(errorType) {
        return errorType === "THROTTLING" || errorType === "TRANSIENT";
    }
}
exports.StandardRetryStrategy = StandardRetryStrategy;
