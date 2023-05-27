import {
  ServiceException as __ServiceException,
  ServiceExceptionOptions as __ServiceExceptionOptions,
} from "@aws-sdk/smithy-client";
export { __ServiceException, __ServiceExceptionOptions };
export declare class SSOOIDCServiceException extends __ServiceException {
  constructor(options: __ServiceExceptionOptions);
}
