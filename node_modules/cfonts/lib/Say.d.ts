/**
 * Print to console
 *
 * @param  {string}  INPUT       - The string you want to write out
 * @param  {object}  SETTINGS    - Settings object
 * @param  {boolean} debug       - A flag to enable debug mode
 * @param  {number}  debuglevel  - The debug level we want to show
 * @param  {object}  size        - The size of the terminal as an object, default: Size
 * @param  {number}  size.width  - The width of the terminal
 * @param  {number}  size.height - The height of the terminal
 */
export function Say(INPUT: string, SETTINGS?: object, debug?: boolean, debuglevel?: number, size?: {
    width: number;
    height: number;
}): void;
