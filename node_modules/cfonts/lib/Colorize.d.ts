/**
 * Replace placeholders with color information
 *
 * @param  {string}  character    - The string to be converted
 * @param  {number}  fontColors   - The number of allowed colors for this font
 * @param  {array}   optionColors - An array of user defined colors
 *
 * @return {string}               - The character with color ansi escape sequences for CLI
 */
export function Colorize(character: string, fontColors: number, optionColors: any[]): string;
