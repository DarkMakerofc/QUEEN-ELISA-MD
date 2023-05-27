"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.de_UpdateIdentityPoolCommand = exports.de_UntagResourceCommand = exports.de_UnlinkIdentityCommand = exports.de_UnlinkDeveloperIdentityCommand = exports.de_TagResourceCommand = exports.de_SetPrincipalTagAttributeMapCommand = exports.de_SetIdentityPoolRolesCommand = exports.de_MergeDeveloperIdentitiesCommand = exports.de_LookupDeveloperIdentityCommand = exports.de_ListTagsForResourceCommand = exports.de_ListIdentityPoolsCommand = exports.de_ListIdentitiesCommand = exports.de_GetPrincipalTagAttributeMapCommand = exports.de_GetOpenIdTokenForDeveloperIdentityCommand = exports.de_GetOpenIdTokenCommand = exports.de_GetIdentityPoolRolesCommand = exports.de_GetIdCommand = exports.de_GetCredentialsForIdentityCommand = exports.de_DescribeIdentityPoolCommand = exports.de_DescribeIdentityCommand = exports.de_DeleteIdentityPoolCommand = exports.de_DeleteIdentitiesCommand = exports.de_CreateIdentityPoolCommand = exports.se_UpdateIdentityPoolCommand = exports.se_UntagResourceCommand = exports.se_UnlinkIdentityCommand = exports.se_UnlinkDeveloperIdentityCommand = exports.se_TagResourceCommand = exports.se_SetPrincipalTagAttributeMapCommand = exports.se_SetIdentityPoolRolesCommand = exports.se_MergeDeveloperIdentitiesCommand = exports.se_LookupDeveloperIdentityCommand = exports.se_ListTagsForResourceCommand = exports.se_ListIdentityPoolsCommand = exports.se_ListIdentitiesCommand = exports.se_GetPrincipalTagAttributeMapCommand = exports.se_GetOpenIdTokenForDeveloperIdentityCommand = exports.se_GetOpenIdTokenCommand = exports.se_GetIdentityPoolRolesCommand = exports.se_GetIdCommand = exports.se_GetCredentialsForIdentityCommand = exports.se_DescribeIdentityPoolCommand = exports.se_DescribeIdentityCommand = exports.se_DeleteIdentityPoolCommand = exports.se_DeleteIdentitiesCommand = exports.se_CreateIdentityPoolCommand = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
const protocol_http_1 = require("@smithy/protocol-http");
const CognitoIdentityServiceException_1 = require("../models/CognitoIdentityServiceException");
const models_0_1 = require("../models/models_0");
const se_CreateIdentityPoolCommand = async (input, context) => {
    const headers = sharedHeaders("CreateIdentityPool");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_CreateIdentityPoolCommand = se_CreateIdentityPoolCommand;
const se_DeleteIdentitiesCommand = async (input, context) => {
    const headers = sharedHeaders("DeleteIdentities");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DeleteIdentitiesCommand = se_DeleteIdentitiesCommand;
const se_DeleteIdentityPoolCommand = async (input, context) => {
    const headers = sharedHeaders("DeleteIdentityPool");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DeleteIdentityPoolCommand = se_DeleteIdentityPoolCommand;
const se_DescribeIdentityCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeIdentity");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeIdentityCommand = se_DescribeIdentityCommand;
const se_DescribeIdentityPoolCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeIdentityPool");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeIdentityPoolCommand = se_DescribeIdentityPoolCommand;
const se_GetCredentialsForIdentityCommand = async (input, context) => {
    const headers = sharedHeaders("GetCredentialsForIdentity");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_GetCredentialsForIdentityCommand = se_GetCredentialsForIdentityCommand;
const se_GetIdCommand = async (input, context) => {
    const headers = sharedHeaders("GetId");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_GetIdCommand = se_GetIdCommand;
const se_GetIdentityPoolRolesCommand = async (input, context) => {
    const headers = sharedHeaders("GetIdentityPoolRoles");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_GetIdentityPoolRolesCommand = se_GetIdentityPoolRolesCommand;
const se_GetOpenIdTokenCommand = async (input, context) => {
    const headers = sharedHeaders("GetOpenIdToken");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_GetOpenIdTokenCommand = se_GetOpenIdTokenCommand;
const se_GetOpenIdTokenForDeveloperIdentityCommand = async (input, context) => {
    const headers = sharedHeaders("GetOpenIdTokenForDeveloperIdentity");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_GetOpenIdTokenForDeveloperIdentityCommand = se_GetOpenIdTokenForDeveloperIdentityCommand;
const se_GetPrincipalTagAttributeMapCommand = async (input, context) => {
    const headers = sharedHeaders("GetPrincipalTagAttributeMap");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_GetPrincipalTagAttributeMapCommand = se_GetPrincipalTagAttributeMapCommand;
const se_ListIdentitiesCommand = async (input, context) => {
    const headers = sharedHeaders("ListIdentities");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListIdentitiesCommand = se_ListIdentitiesCommand;
const se_ListIdentityPoolsCommand = async (input, context) => {
    const headers = sharedHeaders("ListIdentityPools");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListIdentityPoolsCommand = se_ListIdentityPoolsCommand;
const se_ListTagsForResourceCommand = async (input, context) => {
    const headers = sharedHeaders("ListTagsForResource");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListTagsForResourceCommand = se_ListTagsForResourceCommand;
const se_LookupDeveloperIdentityCommand = async (input, context) => {
    const headers = sharedHeaders("LookupDeveloperIdentity");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_LookupDeveloperIdentityCommand = se_LookupDeveloperIdentityCommand;
const se_MergeDeveloperIdentitiesCommand = async (input, context) => {
    const headers = sharedHeaders("MergeDeveloperIdentities");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_MergeDeveloperIdentitiesCommand = se_MergeDeveloperIdentitiesCommand;
const se_SetIdentityPoolRolesCommand = async (input, context) => {
    const headers = sharedHeaders("SetIdentityPoolRoles");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_SetIdentityPoolRolesCommand = se_SetIdentityPoolRolesCommand;
const se_SetPrincipalTagAttributeMapCommand = async (input, context) => {
    const headers = sharedHeaders("SetPrincipalTagAttributeMap");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_SetPrincipalTagAttributeMapCommand = se_SetPrincipalTagAttributeMapCommand;
const se_TagResourceCommand = async (input, context) => {
    const headers = sharedHeaders("TagResource");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_TagResourceCommand = se_TagResourceCommand;
const se_UnlinkDeveloperIdentityCommand = async (input, context) => {
    const headers = sharedHeaders("UnlinkDeveloperIdentity");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_UnlinkDeveloperIdentityCommand = se_UnlinkDeveloperIdentityCommand;
const se_UnlinkIdentityCommand = async (input, context) => {
    const headers = sharedHeaders("UnlinkIdentity");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_UnlinkIdentityCommand = se_UnlinkIdentityCommand;
const se_UntagResourceCommand = async (input, context) => {
    const headers = sharedHeaders("UntagResource");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_UntagResourceCommand = se_UntagResourceCommand;
const se_UpdateIdentityPoolCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateIdentityPool");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_UpdateIdentityPoolCommand = se_UpdateIdentityPoolCommand;
const de_CreateIdentityPoolCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CreateIdentityPoolCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_CreateIdentityPoolCommand = de_CreateIdentityPoolCommand;
const de_CreateIdentityPoolCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.cognitoidentity#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.cognitoidentity#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DeleteIdentitiesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeleteIdentitiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DeleteIdentitiesCommand = de_DeleteIdentitiesCommand;
const de_DeleteIdentitiesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DeleteIdentityPoolCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeleteIdentityPoolCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
exports.de_DeleteIdentityPoolCommand = de_DeleteIdentityPoolCommand;
const de_DeleteIdentityPoolCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeIdentityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeIdentityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_IdentityDescription(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DescribeIdentityCommand = de_DescribeIdentityCommand;
const de_DescribeIdentityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeIdentityPoolCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeIdentityPoolCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DescribeIdentityPoolCommand = de_DescribeIdentityPoolCommand;
const de_DescribeIdentityPoolCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_GetCredentialsForIdentityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetCredentialsForIdentityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetCredentialsForIdentityResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_GetCredentialsForIdentityCommand = de_GetCredentialsForIdentityCommand;
const de_GetCredentialsForIdentityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExternalServiceException":
        case "com.amazonaws.cognitoidentity#ExternalServiceException":
            throw await de_ExternalServiceExceptionRes(parsedOutput, context);
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidIdentityPoolConfigurationException":
        case "com.amazonaws.cognitoidentity#InvalidIdentityPoolConfigurationException":
            throw await de_InvalidIdentityPoolConfigurationExceptionRes(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.cognitoidentity#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_GetIdCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetIdCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_GetIdCommand = de_GetIdCommand;
const de_GetIdCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExternalServiceException":
        case "com.amazonaws.cognitoidentity#ExternalServiceException":
            throw await de_ExternalServiceExceptionRes(parsedOutput, context);
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.cognitoidentity#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.cognitoidentity#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_GetIdentityPoolRolesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetIdentityPoolRolesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_GetIdentityPoolRolesCommand = de_GetIdentityPoolRolesCommand;
const de_GetIdentityPoolRolesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.cognitoidentity#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_GetOpenIdTokenCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetOpenIdTokenCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_GetOpenIdTokenCommand = de_GetOpenIdTokenCommand;
const de_GetOpenIdTokenCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExternalServiceException":
        case "com.amazonaws.cognitoidentity#ExternalServiceException":
            throw await de_ExternalServiceExceptionRes(parsedOutput, context);
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.cognitoidentity#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_GetOpenIdTokenForDeveloperIdentityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetOpenIdTokenForDeveloperIdentityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_GetOpenIdTokenForDeveloperIdentityCommand = de_GetOpenIdTokenForDeveloperIdentityCommand;
const de_GetOpenIdTokenForDeveloperIdentityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DeveloperUserAlreadyRegisteredException":
        case "com.amazonaws.cognitoidentity#DeveloperUserAlreadyRegisteredException":
            throw await de_DeveloperUserAlreadyRegisteredExceptionRes(parsedOutput, context);
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.cognitoidentity#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_GetPrincipalTagAttributeMapCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetPrincipalTagAttributeMapCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_GetPrincipalTagAttributeMapCommand = de_GetPrincipalTagAttributeMapCommand;
const de_GetPrincipalTagAttributeMapCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ListIdentitiesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListIdentitiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListIdentitiesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_ListIdentitiesCommand = de_ListIdentitiesCommand;
const de_ListIdentitiesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ListIdentityPoolsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListIdentityPoolsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_ListIdentityPoolsCommand = de_ListIdentityPoolsCommand;
const de_ListIdentityPoolsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListTagsForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_ListTagsForResourceCommand = de_ListTagsForResourceCommand;
const de_ListTagsForResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_LookupDeveloperIdentityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_LookupDeveloperIdentityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_LookupDeveloperIdentityCommand = de_LookupDeveloperIdentityCommand;
const de_LookupDeveloperIdentityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.cognitoidentity#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_MergeDeveloperIdentitiesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_MergeDeveloperIdentitiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_MergeDeveloperIdentitiesCommand = de_MergeDeveloperIdentitiesCommand;
const de_MergeDeveloperIdentitiesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.cognitoidentity#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_SetIdentityPoolRolesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_SetIdentityPoolRolesCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
exports.de_SetIdentityPoolRolesCommand = de_SetIdentityPoolRolesCommand;
const de_SetIdentityPoolRolesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.cognitoidentity#ConcurrentModificationException":
            throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.cognitoidentity#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_SetPrincipalTagAttributeMapCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_SetPrincipalTagAttributeMapCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_SetPrincipalTagAttributeMapCommand = de_SetPrincipalTagAttributeMapCommand;
const de_SetPrincipalTagAttributeMapCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_TagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_TagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_TagResourceCommand = de_TagResourceCommand;
const de_TagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_UnlinkDeveloperIdentityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UnlinkDeveloperIdentityCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
exports.de_UnlinkDeveloperIdentityCommand = de_UnlinkDeveloperIdentityCommand;
const de_UnlinkDeveloperIdentityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.cognitoidentity#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_UnlinkIdentityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UnlinkIdentityCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
exports.de_UnlinkIdentityCommand = de_UnlinkIdentityCommand;
const de_UnlinkIdentityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExternalServiceException":
        case "com.amazonaws.cognitoidentity#ExternalServiceException":
            throw await de_ExternalServiceExceptionRes(parsedOutput, context);
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.cognitoidentity#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_UntagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UntagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_UntagResourceCommand = de_UntagResourceCommand;
const de_UntagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_UpdateIdentityPoolCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UpdateIdentityPoolCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_UpdateIdentityPoolCommand = de_UpdateIdentityPoolCommand;
const de_UpdateIdentityPoolCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.cognitoidentity#ConcurrentModificationException":
            throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.cognitoidentity#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.cognitoidentity#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ConcurrentModificationExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.ConcurrentModificationException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_DeveloperUserAlreadyRegisteredExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.DeveloperUserAlreadyRegisteredException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_ExternalServiceExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.ExternalServiceException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InternalErrorExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.InternalErrorException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidIdentityPoolConfigurationExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.InvalidIdentityPoolConfigurationException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidParameterExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.InvalidParameterException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_LimitExceededExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.LimitExceededException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_NotAuthorizedExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.NotAuthorizedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_ResourceConflictExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.ResourceConflictException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_ResourceNotFoundExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.ResourceNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_TooManyRequestsExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.TooManyRequestsException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_Credentials = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        AccessKeyId: smithy_client_1.expectString,
        Expiration: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        SecretKey: smithy_client_1.expectString,
        SessionToken: smithy_client_1.expectString,
    });
};
const de_GetCredentialsForIdentityResponse = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        Credentials: (_) => de_Credentials(_, context),
        IdentityId: smithy_client_1.expectString,
    });
};
const de_IdentitiesList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_IdentityDescription(entry, context);
    });
    return retVal;
};
const de_IdentityDescription = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        CreationDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        IdentityId: smithy_client_1.expectString,
        LastModifiedDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        Logins: smithy_client_1._json,
    });
};
const de_ListIdentitiesResponse = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        Identities: (_) => de_IdentitiesList(_, context),
        IdentityPoolId: smithy_client_1.expectString,
        NextToken: smithy_client_1.expectString,
    });
};
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});
const collectBody = (streamBody = new Uint8Array(), context) => {
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
const collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const throwDefaultError = (0, smithy_client_1.withBaseException)(CognitoIdentityServiceException_1.CognitoIdentityServiceException);
const buildHttpRpcRequest = async (context, headers, path, resolvedHostname, body) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const contents = {
        protocol,
        hostname,
        port,
        method: "POST",
        path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
        headers,
    };
    if (resolvedHostname !== undefined) {
        contents.hostname = resolvedHostname;
    }
    if (body !== undefined) {
        contents.body = body;
    }
    return new protocol_http_1.HttpRequest(contents);
};
function sharedHeaders(operation) {
    return {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": `AWSCognitoIdentityService.${operation}`,
    };
}
const parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        return JSON.parse(encoded);
    }
    return {};
});
const parseErrorBody = async (errorBody, context) => {
    const value = await parseBody(errorBody, context);
    value.message = value.message ?? value.Message;
    return value;
};
const loadRestJsonErrorCode = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (typeof cleanValue === "number") {
            cleanValue = cleanValue.toString();
        }
        if (cleanValue.indexOf(",") >= 0) {
            cleanValue = cleanValue.split(",")[0];
        }
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    const headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== undefined) {
        return sanitizeErrorCode(output.headers[headerKey]);
    }
    if (data.code !== undefined) {
        return sanitizeErrorCode(data.code);
    }
    if (data["__type"] !== undefined) {
        return sanitizeErrorCode(data["__type"]);
    }
};
