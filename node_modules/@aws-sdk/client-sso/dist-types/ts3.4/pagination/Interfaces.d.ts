import { PaginationConfiguration } from "@aws-sdk/types";
import { SSOClient } from "../SSOClient";
export interface SSOPaginationConfiguration extends PaginationConfiguration {
  client: SSOClient;
}
