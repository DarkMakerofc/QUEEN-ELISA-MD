/**
 * Interpolate a linear path from a number to another number
 *
 * @param  {number}  pointA - The number from which to start
 * @param  {number}  pointB - The number to go to
 * @param  {number}  n      - The current step
 * @param  {number}  steps  - The amount of steps
 *
 * @return {number}         - The number at step n
 */
export function GetLinear(pointA: number, pointB: number, n: number, steps: number): number;
/**
 * Interpolate a radial path from a number to another number
 *
 * @param  {number}  fromTheta - The radian from which to start
 * @param  {number}  toTheta   - The radian to go to
 * @param  {number}  n         - The current step
 * @param  {number}  steps     - The amount of steps
 *
 * @return {number}            - The radian at step n
 */
export function GetTheta(fromTheta: number, toTheta: number, n: number, steps: number): number;
/**
 * Generate the most colorful delta between two colors
 *
 * @param  {string}  fromColor - The color from which to start
 * @param  {string}  toColor   - The color to go to
 * @param  {number}  steps     - The amount of colors of the gradient
 *
 * @return {array}             - An array of colors
 */
export function GetGradientColors(fromColor: string, toColor: string, steps: number): any[];
/**
 * Take a bunch of lines and color them in the colors provided
 *
 * @param  {array}   lines                  - The lines to be colored
 * @param  {array}   colors                 - The colors in an array
 * @param  {number}  firstCharacterPosition - We may have to cut something off from the start when text is aligned center, right
 *
 * @return {array}                          - The lines in color
 */
export function PaintLines(lines: any[], colors: any[], firstCharacterPosition: number): any[];
/**
 * Make sure a color is hex
 *
 * @param  {string} color - The color
 *
 * @return {string}       - The hex color
 */
export function Color2hex(color: string): string;
/**
 * Calculate the gaps between an array of points
 *
 * @param  {array}  points - An array of points, it's not important what's in the array for this function
 * @param  {number} steps  - The amount of steps we have to distribute between the above points
 *
 * @return {array}         - An array of steps per gap
 */
export function GetGaps(points: any[], steps: number): any[];
/**
 * Generate colors between two given colors
 *
 * @param  {string} fromHex - The color we start from in hex
 * @param  {string} toHex   - The color we end up at in hex
 * @param  {number} steps   - How many colors should be returned
 *
 * @return {array}          - An array for colors
 */
export function TransitionBetweenHex(fromHex: string, toHex: string, steps: number): any[];
/**
 * Generate n colors between x colors
 *
 * @param  {array}  colors    - An array of colors in hex
 * @param  {number} steps     - The amount of colors to generate
 * @param  {object} gradients - An object of pre-packaged gradient colors
 *
 * @return {array}            - An array of colors
 */
export function Transition(colors: any[], steps: number, gradients?: object): any[];
/**
 * Paint finished output in a gradient
 *
 * @param  {object}  options                     - Arguments
 * @param  {array}   options.output              - The output to be painted
 * @param  {array}   options.gradient            - An array of two colors for start and end of gradient
 * @param  {number}  options.lines               - How many lines the output contains
 * @param  {number}  options.lineHeight          - The line height between lines
 * @param  {number}  options.fontLines           - The line height (line breaks) of a single font line
 * @param  {boolean} options.independentGradient - A switch to calculate gradient per line or not
 * @param  {boolean} options.transitionGradient  - A switch for transition gradients
 *
 * @return {array}                               - The output array painted in ANSI colors
 */
export function PaintGradient({ output, gradient, lines, lineHeight, fontLines, independentGradient, transitionGradient }: {
    output: any[];
    gradient: any[];
    lines: number;
    lineHeight: number;
    fontLines: number;
    independentGradient: boolean;
    transitionGradient: boolean;
}): any[];
