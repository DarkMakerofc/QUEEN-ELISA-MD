import { EndpointVariant } from "./EndpointVariant";
export type RegionHash = Record<
  string,
  {
    variants: EndpointVariant[];
    signingService?: string;
    signingRegion?: string;
  }
>;
