export declare const throwDefaultError: ({
  output,
  parsedBody,
  exceptionCtor,
  errorCode,
}: any) => never;
export declare const withBaseException: (
  ExceptionCtor: new (...args: any) => any
) => any;
