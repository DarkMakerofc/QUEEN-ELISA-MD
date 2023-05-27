import { Render } from "./Render.js";
import { Say } from "./Say.js";
/**
 * Run cli commands
 *
 * @param  {object} inputOptions - All possible options registered for this app
 * @param  {array}  inputArgs    - The arguments given to us in our cli, default: process.argv
 */
export function Cli(inputOptions?: object, inputArgs?: any[]): void;
export { Render as render, Say as say };
