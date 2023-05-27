interface RemoveBgApiOptions {
    /**
     * Maximum output image resolution:
     * "preview" / "small" / "regular" (default) = Resize image to 0.25 megapixels (e.g. 625×400 pixels) – 0.25 credits per image,
     * "full" / "4k" = Use original image resolution, up to 25 megapixels (e.g. 6250x4000) with formats ZIP or JPG, or up to 10 megapixels (e.g. 4000x2500) with PNG – 1 credit per image),
     * "auto" = Use highest available resolution (based on image size and available credits).
     * For backwards-compatibility this parameter also accepts the values "medium" (up to 1.5 megapixels) and "hd" (up to 4 megapixels) for 1 credit per image.
     * Note that 'any' was added for future compatibility-sake.
     */
    size?: "preview" | "small" | "regular" | "medium" | "full" | "auto" | "hd" | "4k" | any;
    /**
     * Help the API a little by telling the type of image you want to extract the background from.
     * Defaults to "auto".
     * Note that 'any' was added for future compatibility-sake.
     */
    type?: "auto" | "person" | "product" | "car" | any;
    /**
     * Result image format: "auto" = Use PNG format if transparent regions exists, otherwise use JPG format (default),
     * "png" = PNG format with alpha transparency,
     * "jpg" = JPG format, no transparency,
     * "zip" = ZIP format, contains color image and alpha matte image, supports transparency.
     */
    format?: "auto" | "png" | "jpg" | "zip";
    /**
     * Scales the subject relative to the total image size.
     * Can be any value from "10%" to "100%", or "original" (default).
     * Scaling the subject implies "position=center" (unless specified otherwise).
     */
    scale?: string;
    /**
     * Positions the subject within the image canvas.
     * Can be "original" (default unless "scale" is given),
     * "center" (default when "scale" is given)
     * or a value from "0%" to "100%" (both horizontal and vertical) or two values (horizontal, vertical).
     */
    position?: string;
    /**
     * The file to save to.
     * Alternatively, you can access the result via the result object's `base64img` property.
     */
    outputFile?: string;
    /**
     * Region of interest: Only contents of this rectangular region can be detected as foreground.
     * Everything outside is considered background and will be removed.
     * The rectangle is defined as two x/y coordinates in the format "<x1> <y1> <x2> <y2>".
     * The coordinates can be in absolute pixels (suffix 'px') or relative to the width/height of the image (suffix '%').
     * By default, the whole image is the region of interest ("0% 0% 100% 100%").
     */
    roi?: string;
    /**
     * Whether to crop off all empty regions (default: false).
     * Note that cropping has no effect on the amount of charged credits.
     */
    crop?: boolean;
    /**
     * Adds a margin around the cropped subject (default: 0).
     * Can be an absolute value (e.g. "30px") or relative to the subject size (e.g. "10%").
     * Can be a single value (all sides), two values (top/bottom and left/right) or four values (top, right, bottom, left).
     * This parameter only has an effect when "crop=true".
     * The maximum margin that can be added on each side is 50% of the subject dimensions or 500 pixels.
     */
    crop_margin?: string;
    /**
     * Adds a solid color background.
     * Can be a hex color code (e.g. 81d4fa, fff) or a color name (e.g. green).
     * For semi-transparency, 4-/8-digit hex codes are also supported (e.g. 81d4fa77).
     * (If this parameter is present, the other bg_ parameters must be empty.)
     */
    bg_color?: string;
    /**
     * Adds a background image from a URL.
     * The image is centered and resized to fill the canvas while preserving the aspect ratio,
     * unless it already has the exact same dimensions as the foreground image.
     * (If this parameter is present, the other "bg_" parameters must be empty.)
     */
    bg_image_url?: string;
    /**
     * Request either the finalized image (`"rgba"`, default) or an alpha mask (`"alpha"`).
     * Note: Since remove.bg also applies RGB color corrections on edges,
     * using only the alpha mask often leads to a lower final image quality.
     * Therefore `"rgba"` is recommended.
     */
    channels?: string;
    /**
     * Whether to add an artificial shadow to the result (default: `false`).
     * NOTE: Adding shadows is currently only supported for car photos.
     * Other subjects are returned without shadow, even if set to `true`
     * (this might change in the future).
     */
    add_shadow?: boolean;
}
interface RemoveBgOptions extends RemoveBgApiOptions {
    apiKey: string;
}
export interface RemoveBgUrlOptions extends RemoveBgOptions {
    url: string;
}
export interface RemoveBgBase64Options extends RemoveBgOptions {
    base64img: string;
}
export interface RemoveBgFileOptions extends RemoveBgOptions {
    path: string;
}
export interface RemoveBgResult {
    /**
     * The result image, represented as a base64 encoded string.
     */
    base64img: string;
    /**
     * Amount of credits charged for this call.
     */
    creditsCharged: number;
    /**
     * Detected foreground type.
     */
    detectedType: "product" | "person" | "animal" | "car" | "other" | any;
    /**
     * Width of the result image..
     */
    resultWidth: number;
    /**
     * Height of the result image.
     */
    resultHeight: number;
    /**
     * Total rate limit in megapixel images.
     */
    rateLimit: number;
    /**
     * Remaining rate limit for this minute.
     */
    rateLimitRemaining: number;
    /**
     * Unix timestamp when rate limit will reset.
     */
    rateLimitReset: number;
    /**
     * Seconds until rate limit will reset (only present if rate limit exceeded).
     */
    retryAfter?: number;
}
export interface RemoveBgError {
    title: string;
    detail: string;
}
export declare function removeBackgroundFromImageUrl(options: RemoveBgUrlOptions): Promise<RemoveBgResult>;
export declare function removeBackgroundFromImageFile(options: RemoveBgFileOptions): Promise<RemoveBgResult>;
export declare function removeBackgroundFromImageBase64(options: RemoveBgBase64Options): Promise<RemoveBgResult>;
export {};
