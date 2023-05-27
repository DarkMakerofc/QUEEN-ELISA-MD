import { HeaderBag, HttpRequest } from "@aws-sdk/types";
export declare const getCanonicalHeaders: (
  { headers }: HttpRequest,
  unsignableHeaders?: Set<string>,
  signableHeaders?: Set<string>
) => HeaderBag;
