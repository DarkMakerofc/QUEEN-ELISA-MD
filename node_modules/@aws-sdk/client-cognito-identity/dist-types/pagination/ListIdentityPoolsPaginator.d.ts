import { Paginator } from "@aws-sdk/types";
import { ListIdentityPoolsCommandInput, ListIdentityPoolsCommandOutput } from "../commands/ListIdentityPoolsCommand";
import { CognitoIdentityPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateListIdentityPools(config: CognitoIdentityPaginationConfiguration, input: ListIdentityPoolsCommandInput, ...additionalArguments: any): Paginator<ListIdentityPoolsCommandOutput>;
