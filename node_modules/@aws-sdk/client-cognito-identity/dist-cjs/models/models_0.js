"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcurrentModificationException = exports.DeveloperUserAlreadyRegisteredException = exports.RoleMappingType = exports.MappingRuleMatchType = exports.InvalidIdentityPoolConfigurationException = exports.ExternalServiceException = exports.ResourceNotFoundException = exports.ErrorCode = exports.TooManyRequestsException = exports.ResourceConflictException = exports.NotAuthorizedException = exports.LimitExceededException = exports.InvalidParameterException = exports.InternalErrorException = exports.AmbiguousRoleResolutionType = void 0;
const CognitoIdentityServiceException_1 = require("./CognitoIdentityServiceException");
exports.AmbiguousRoleResolutionType = {
    AUTHENTICATED_ROLE: "AuthenticatedRole",
    DENY: "Deny",
};
class InternalErrorException extends CognitoIdentityServiceException_1.CognitoIdentityServiceException {
    constructor(opts) {
        super({
            name: "InternalErrorException",
            $fault: "server",
            ...opts,
        });
        this.name = "InternalErrorException";
        this.$fault = "server";
        Object.setPrototypeOf(this, InternalErrorException.prototype);
    }
}
exports.InternalErrorException = InternalErrorException;
class InvalidParameterException extends CognitoIdentityServiceException_1.CognitoIdentityServiceException {
    constructor(opts) {
        super({
            name: "InvalidParameterException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidParameterException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidParameterException.prototype);
    }
}
exports.InvalidParameterException = InvalidParameterException;
class LimitExceededException extends CognitoIdentityServiceException_1.CognitoIdentityServiceException {
    constructor(opts) {
        super({
            name: "LimitExceededException",
            $fault: "client",
            ...opts,
        });
        this.name = "LimitExceededException";
        this.$fault = "client";
        Object.setPrototypeOf(this, LimitExceededException.prototype);
    }
}
exports.LimitExceededException = LimitExceededException;
class NotAuthorizedException extends CognitoIdentityServiceException_1.CognitoIdentityServiceException {
    constructor(opts) {
        super({
            name: "NotAuthorizedException",
            $fault: "client",
            ...opts,
        });
        this.name = "NotAuthorizedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, NotAuthorizedException.prototype);
    }
}
exports.NotAuthorizedException = NotAuthorizedException;
class ResourceConflictException extends CognitoIdentityServiceException_1.CognitoIdentityServiceException {
    constructor(opts) {
        super({
            name: "ResourceConflictException",
            $fault: "client",
            ...opts,
        });
        this.name = "ResourceConflictException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ResourceConflictException.prototype);
    }
}
exports.ResourceConflictException = ResourceConflictException;
class TooManyRequestsException extends CognitoIdentityServiceException_1.CognitoIdentityServiceException {
    constructor(opts) {
        super({
            name: "TooManyRequestsException",
            $fault: "client",
            ...opts,
        });
        this.name = "TooManyRequestsException";
        this.$fault = "client";
        Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    }
}
exports.TooManyRequestsException = TooManyRequestsException;
exports.ErrorCode = {
    ACCESS_DENIED: "AccessDenied",
    INTERNAL_SERVER_ERROR: "InternalServerError",
};
class ResourceNotFoundException extends CognitoIdentityServiceException_1.CognitoIdentityServiceException {
    constructor(opts) {
        super({
            name: "ResourceNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "ResourceNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    }
}
exports.ResourceNotFoundException = ResourceNotFoundException;
class ExternalServiceException extends CognitoIdentityServiceException_1.CognitoIdentityServiceException {
    constructor(opts) {
        super({
            name: "ExternalServiceException",
            $fault: "client",
            ...opts,
        });
        this.name = "ExternalServiceException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ExternalServiceException.prototype);
    }
}
exports.ExternalServiceException = ExternalServiceException;
class InvalidIdentityPoolConfigurationException extends CognitoIdentityServiceException_1.CognitoIdentityServiceException {
    constructor(opts) {
        super({
            name: "InvalidIdentityPoolConfigurationException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidIdentityPoolConfigurationException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidIdentityPoolConfigurationException.prototype);
    }
}
exports.InvalidIdentityPoolConfigurationException = InvalidIdentityPoolConfigurationException;
exports.MappingRuleMatchType = {
    CONTAINS: "Contains",
    EQUALS: "Equals",
    NOT_EQUAL: "NotEqual",
    STARTS_WITH: "StartsWith",
};
exports.RoleMappingType = {
    RULES: "Rules",
    TOKEN: "Token",
};
class DeveloperUserAlreadyRegisteredException extends CognitoIdentityServiceException_1.CognitoIdentityServiceException {
    constructor(opts) {
        super({
            name: "DeveloperUserAlreadyRegisteredException",
            $fault: "client",
            ...opts,
        });
        this.name = "DeveloperUserAlreadyRegisteredException";
        this.$fault = "client";
        Object.setPrototypeOf(this, DeveloperUserAlreadyRegisteredException.prototype);
    }
}
exports.DeveloperUserAlreadyRegisteredException = DeveloperUserAlreadyRegisteredException;
class ConcurrentModificationException extends CognitoIdentityServiceException_1.CognitoIdentityServiceException {
    constructor(opts) {
        super({
            name: "ConcurrentModificationException",
            $fault: "client",
            ...opts,
        });
        this.name = "ConcurrentModificationException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ConcurrentModificationException.prototype);
    }
}
exports.ConcurrentModificationException = ConcurrentModificationException;
