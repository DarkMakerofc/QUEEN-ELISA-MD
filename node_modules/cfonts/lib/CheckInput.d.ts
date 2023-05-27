/**
 * Check input for human errors
 */
export type ReturnObject = {
    /**
     * - Whether the input is valid
     */
    pass: boolean;
    /**
     * - Possible error messages
     */
    message: string;
};
/**
 * Check input for human errors
 *
 * @param  {string}  INPUT                  - The string you want to write out
 * @param  {string}  userFont               - The user specified font
 * @param  {array}   userColors             - The user specified colors
 * @param  {string}  userBackground         - The user specified background color
 * @param  {string}  userAlign              - The user specified alignment option
 * @param  {array}   userGradient           - The user specified gradient option
 * @param  {boolean} userTransitionGradient - The user specified gradient transition option
 * @param  {string}  userEnv                - The user specified environment
 * @param  {object}  fontfaces              - All allowed fontfaces
 * @param  {object}  colors                 - All allowed font colors
 * @param  {object}  bgcolors               - All allowed background colors
 * @param  {object}  gradientcolors         - All allowed gradient colors
 * @param  {object}  gradients              - All allowed gradients
 * @param  {array}   alignment              - All allowed alignments
 *
 * @typedef  {object} ReturnObject
 *   @property {boolean} pass               - Whether the input is valid
 *   @property {string}  message            - Possible error messages
 *
 * @return {ReturnObject}                   - An object with error messages and a pass key
 */
export function CheckInput(INPUT: string, userFont: string, userColors: any[], userBackground: string, userAlign: string, userGradient: any[], userTransitionGradient: boolean, userEnv: string, fontfaces?: object, colors?: object, bgcolors?: object, gradientcolors?: object, gradients?: object, alignment?: any[]): ReturnObject;
