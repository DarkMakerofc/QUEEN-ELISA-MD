import { EndpointVariant } from "./EndpointVariant";
export type PartitionHash = Record<
  string,
  {
    regions: string[];
    regionRegex: string;
    variants: EndpointVariant[];
    endpoint?: string;
  }
>;
