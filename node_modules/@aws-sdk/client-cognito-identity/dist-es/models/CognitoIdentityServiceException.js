import { ServiceException as __ServiceException, } from "@aws-sdk/smithy-client";
export { __ServiceException };
export class CognitoIdentityServiceException extends __ServiceException {
    constructor(options) {
        super(options);
        Object.setPrototypeOf(this, CognitoIdentityServiceException.prototype);
    }
}
