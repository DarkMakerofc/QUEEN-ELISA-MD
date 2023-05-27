/**
 * Calculate the spaces to be added to the left of each line to align them either center or right
 *
 * @param  {array}   output         - The output array the line shall be appended to
 * @param  {number}  lineLength     - The current line length
 * @param  {number}  characterLines - The amount of line breaks in one character
 * @param  {string}  align          - The alignment of the text, only `center` and `right` will do anything
 * @param  {object}  size           - The size of the terminal as an object, default: Size
 * @param  {number}  size.width     - The width of the terminal
 * @param  {number}  size.height    - The height of the terminal
 *
 * @return {array}                  - The output array with space added on the left for alignment
 */
export function AlignText(output: any[], lineLength: number, characterLines: number, align: string, size?: {
    width: number;
    height: number;
}): any[];
