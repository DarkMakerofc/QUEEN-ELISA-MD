/**
 * Parse cli arguments into a nice object
 *
 * @param  {object} inputOptions - All possible options registered for this app
 * @param  {array}  inputArgs    - The arguments given to us in our cli, default: process.argv
 *
 * @return {object}              - An object of all options with at least their default values
 */
export function ParseArgs(inputOptions?: object, inputArgs?: any[]): object;
