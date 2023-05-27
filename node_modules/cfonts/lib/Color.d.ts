/**
 * Converts an HSV color value to RGB
 */
export type Hsv2rgbReturnObject = {
    /**
     * - The red value
     */
    r: number;
    /**
     * - The green value
     */
    g: number;
    /**
     * - The blue value
     */
    b: number;
};
/**
 * Abstraction for coloring hex-, keyword- and background-colors
 */
export type ColorReturnObject = {
    /**
     * - The open ansi code
     */
    open: string;
    /**
     * - The close ansi code
     */
    close: string;
};
/**
 * Regex to see if a string is a hex color
 *
 * @type {RegExp}
 */
export const HEXTEST: RegExp;
/**
 * Converts an RGB color value to HSV
 *
 * @author https://github.com/Gavin-YYC/colorconvert
 *
 * @param   {object} options   - Arguments
 * @param   {number} options.r - The red color value
 * @param   {number} options.g - The green color value
 * @param   {number} options.b - The blue color value
 *
 * @return  {array}            - The HSV representation
 */
export function Rgb2hsv({ r, g, b }: {
    r: number;
    g: number;
    b: number;
}): any[];
/**
 * Converts an HSV color value to RGB
 *
 * @author https://github.com/Gavin-YYC/colorconvert
 *
 * @param   {number}  h - The hue
 * @param   {number}  s - The saturation
 * @param   {number}  v - The value
 *
 * @typedef  {object} Hsv2rgbReturnObject
 *   @property {number}  r  - The red value
 *   @property {number}  g  - The green value
 *   @property {number}  b  - The blue value
 *
 * @return  {Hsv2rgbReturnObject}  - The RGB representation
 */
export function Hsv2rgb(h: number, s: number, v: number): Hsv2rgbReturnObject;
/**
 * Converts RGB to HEX
 *
 * @param  {number} r - The Red value
 * @param  {number} g - The Green value
 * @param  {number} b - The Blue value
 *
 * @return {string}   - A HEX color
 */
export function Rgb2hex(r: number, g: number, b: number): string;
/**
 * Convert HEX to RGB
 *
 * @param  {string} hex - The HEX color
 *
 * @return {array}      - An object with RGB values
 */
export function Hex2rgb(hex: string): any[];
/**
 * Convert HSV coordinate to HSVrad (degree to radian)
 *
 * @param  {array}  argument  - The HSV representation of a color
 *
 * @return {array}            - The HSVrad color
 */
export function Hsv2hsvRad([h, s, v]: any[]): any[];
/**
 * Convert HSVrad color to HSV (radian to degree)
 *
 * @param {number} hRad - H in rad
 * @param {number} s    - S
 * @param {number} v    - V
 *
 * @return {array}    - The HSV color
 */
export function HsvRad2hsv(hRad: number, s: number, v: number): any[];
/**
 * Convert HEX to HSVrad
 *
 * @param  {string} hex - A HEX color
 *
 * @return {array}      - The HSVrad color
 */
export function Hex2hsvRad(hex: string): any[];
/**
 * Convert HSVrad to HEX
 *
 * @param  {number} hRad - The hue in rad
 * @param  {number} s    - The saturation
 * @param  {number} v    - The value
 *
 * @return {string}      - The HEX color
 */
export function HsvRad2hex(hRad: number, s: number, v: number): string;
/**
 * Convert RGB values to ANSI16 million colors - truecolor
 *
 * @param  {number}   r  - Red value
 * @param  {number}   g  - Green value
 * @param  {number}   b  - Blue value
 * @param  {boolean} bg  - Is this a background color; default: false
 *
 * @return {string}      - The opening ANSI escape sequence for the given color
 */
export function rgb2ansi_16m(r: number, g: number, b: number, bg?: boolean): string;
/**
 * Convert RGB values to ANSI256 escape code
 *
 * @param  {number}  red     - Red value
 * @param  {number}  green   - Green value
 * @param  {number}  blue    - Blue value
 *
 * @return {number}          - The ANSI escape code for the given color
 */
export function rgb2ansi256Code(red: number, green: number, blue: number): number;
/**
 * Convert RGB values to ANSI256
 *
 * @param  {number}   r  - Red value
 * @param  {number}   g  - Green value
 * @param  {number}   b  - Blue value
 * @param  {boolean} bg  - Is this a background color; default: false
 *
 * @return {string}      - The opening ANSI escape sequence for the given color
 */
export function rgb2ansi_256(r: number, g: number, b: number, bg?: boolean): string;
/**
 * Convert ANSI256 code values to ANSI16
 *
 * @param  {number}   code  - The code of the ANSI256 color
 * @param  {boolean} bg     - Is this a background color; default: false
 *
 * @return {string}         - The opening ANSI escape sequence for the given color
 */
export function ansi_2562ansi_16(code: number, bg?: boolean): string;
/**
 * Detect the ANSI support for the current terminal taking into account env vars NO_COLOR and FORCE_COLOR
 *
 * @return {number}  - 0 = no color support; 1 = 16 colors support; 2 = 256 colors support; 3 = 16 million colors support
 */
export function get_term_color_support(): number;
/**
 * Abstraction for coloring hex-, keyword- and background-colors
 *
 * @param  {string}  color    - The color to be used
 * @param  {boolean} bg       - Whether this is a background or not
 *
 * @typedef  {object} ColorReturnObject
 *   @property {string} open  - The open ansi code
 *   @property {string} close - The close ansi code
 *
 * @return {ColorReturnObject}     - An object with open and close ansi codes
 */
export function Color(color: string, bg?: boolean): ColorReturnObject;
