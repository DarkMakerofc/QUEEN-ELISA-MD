import { Client } from "./client";
export declare const createAggregatedClient: (
  commands: Record<string, any>,
  Client: new (...args: any) => Client<any, any, any, any>
) => void;
