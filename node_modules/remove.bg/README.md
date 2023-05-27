# [remove.bg](https://www.remove.bg) API wrapper for Node.js

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]
[![Twitter Follow][twitter-image]][twitter-url]

[npm-image]:http://img.shields.io/npm/v/remove.bg.svg
[npm-url]:https://npmjs.org/package/remove.bg
[downloads-image]:http://img.shields.io/npm/dm/remove.bg.svg
[twitter-image]:https://img.shields.io/twitter/follow/eddyverbruggen.svg?style=social&label=Follow%20me
[twitter-url]:https://twitter.com/eddyverbruggen

<img src="https://github.com/EddyVerbruggen/remove.bg/raw/master/media/remove.bg.promo.jpg" width="600px" height="400px" />

The **AWESOME** remove.bg API is quite easy to use, but it can always be easier - that's where this package comes in.

## Requirements
Get your API key from the [remove.bg website](https://www.remove.bg/api).
At the moment it's early access, so it may take some time to get yours.

## Installation

```bash
npm i remove.bg
```

## Examples
Look at the various `removeFrom*.ts` files in the [examples folder](/examples), or check out the snippets below.

## API
The common **input parameters** of all three currently supported `removeBackgroundFrom*` functions are:

Only the `apiKey` property is mandatory.

| Property | Type | Description |
| --- | --- | --- |
| apiKey | `string` | The API key you got from the [remove.bg website](https://www.remove.bg/api).
| size | `"preview"` (same as `"small"` or `"regular"`), `"full"` (same as `"4k"`), `"medium"`, `"hd"`, `"auto"` | The returned size of the image. The cheaper `"preview"` option is default, while `"auto"` uses the highest available resolution (based on image size and available credits.
| type | `"auto"`, `"person"`, `"product"`, `"car"` | Help the API a little by telling the type of image you want to extract the background from. Default `"auto"`.
| format | `"auto"`, `"png"`, `"jpg"`, `"zip"` | Result image format, the default is `"auto"` which produces a `.png` if transparentcy is detected and `.jpg` otherwise.
| scale | `string` | Scales the subject relative to the total image size. Can be any value from `"10%"` to `"100%"`, or `"original"` (default). Scaling the subject implies "position=center" (unless specified otherwise).
| position | `string` | Positions the subject within the image canvas. Can be `"original"` (default unless `"scale"` is given), "center" (default when `"scale"` is given) or a value from `"0%"` to `"100%"` (both horizontal and vertical) or two values (horizontal, vertical).
| crop | `boolean` | Whether to crop off all empty regions (default: `false`). Note that cropping has no effect on the amount of charged credits.
| crop_margin | `string` | Adds a margin around the cropped subject (default: `0`). Can be an absolute value (e.g. `"30px"`) or relative to the subject size (e.g. `"10%"`). Can be a single value (all sides), two values (top/bottom and left/right) or four values (top, right, bottom, left). This parameter only has an effect when `crop` is `true`.
| roi | `string` | Region of interest: Only contents of this rectangular region can be detected as foreground. Everything outside is considered background and will be removed. The rectangle is defined as two x/y coordinates in the format `"<x1> <y1> <x2> <y2>"`. The coordinates can be in absolute pixels (suffix 'px') or relative to the width/height of the image (suffix '%'). By default, the whole image is the region of interest (`"0% 0% 100% 100%"`).
| bg_color | `string` | Adds a solid color background. Can be a hex color code (e.g. `"81d4fa"`, `"fff"`) or a color name (e.g. `"green"`). For semi-transparency, 4-/8-digit hex codes are also supported (e.g. `"81d4fa77"`). (If this parameter is present, the other "bg_" parameters must be empty.)
| bg_image_url | `string` | Adds a background image from a URL. The image is centered and resized to fill the canvas while preserving the aspect ratio, unless it already has the exact same dimensions as the foreground image. (If this parameter is present, the other "bg_" parameters must be empty.)
| outputFile | `string` | The path to save the returned file to. Alternatively, you can access the result via the result object's `base64img` property (see below).
| channels | `string` | Request either the finalized image (`"rgba"`, default) or an alpha mask (`"alpha"`). Note: Since remove.bg also applies RGB color corrections on edges, using only the alpha mask often leads to a lower final image quality. Therefore `"rgba"` is recommended.
| add_shadow | `boolean` | Whether to add an artificial shadow to the result (default: `false`). NOTE: Adding shadows is currently only supported for car photos. Other subjects are returned without shadow, even if set to `true` (this might change in the future).

And the **output properties** are:

| Property  | Type | Description |
| --- | --- | --- |
| base64img | `string` | Base64 encoded representation of the returned image.
| detectedType | `string` | Either `person`, `product`, `animal`, `car`, or `other`.
| creditsCharged | `number` | Amount of credits charged for this call, based on the output size of the response.
| resultWidth | `number` | The width of the result image, in pixels.
| resultHeight | `number` | The height of the result image, in pixels.
| rateLimit | `number` | Total rate limit in megapixel images.
| rateLimitRemaining | `number` | Remaining rate limit for this minute.
| rateLimitReset | `number` | Unix timestamp when rate limit will reset.
| retryAfter | `number` | Seconds until rate limit will reset (only present if rate limit exceeded).

### `removeBackgroundFromImageFile`
Remove the background from a local file.

```typescript
import { RemoveBgResult, RemoveBgError, removeBackgroundFromImageFile } from "remove.bg";

const localFile = "./local/file/name.jpg";
const outputFile = `${__dirname}/out/img-removed-from-file.png`;

removeBackgroundFromImageFile({
  path: localFile,
  apiKey: "YOUR-API-KEY",
  size: "regular",
  type: "auto",
  scale: "50%",
  outputFile
}).then((result: RemoveBgResult) => {
 console.log(`File saved to ${outputFile}`);
  const base64img = result.base64img;
}).catch((errors: Array<RemoveBgError>) => {
 console.log(JSON.stringify(errors));
});
```

Or have a cool `async/await` example to please your inner hipster:

```typescript
async function myRemoveBgFunction(path: string, outputFile: string) {
    const result: RemoveBgResult = await removeBackgroundFromImageFile({
      path,
      apiKey: "YOUR-API-KEY",
      size: "regular",
      type: "person",
      crop: true,
      scale: "50%",
      outputFile
    });
}
```

### `removeBackgroundFromImageUrl`
Remove the background from a remote file (URL).

```typescript
import { RemoveBgResult, RemoveBgError, removeBackgroundFromImageUrl } from "remove.bg";

const url = "https://domain.tld/path/file.jpg";
const outputFile = `${__dirname}/out/img-removed-from-file.png`;

removeBackgroundFromImageUrl({
  url,
  apiKey: "YOUR-API-KEY",
  size: "regular",
  type: "person",
  outputFile
}).then((result: RemoveBgResult) => {
 console.log(`File saved to ${outputFile}`);
  const base64img = result.base64img;
}).catch((errors: Array<RemoveBgError>) => {
 console.log(JSON.stringify(errors));
});
```

### `removeBackgroundFromImageBase64`
Remove the background from a base64 encoded file.

```typescript
import { RemoveBgResult, RemoveBgError, removeBackgroundFromImageBase64 } from "remove.bg";
import * as fs from "fs";

const localFile = "./local/file/name.jpg";
const base64img = fs.readFileSync(localFile, { encoding: "base64" });
const outputFile = `${__dirname}/out/img-removed-from-file.png`;

removeBackgroundFromImageBase64({
  base64img,
  apiKey: "YOUR-API-KEY",
  size: "regular",
  type: "product",
  outputFile
}).then((result: RemoveBgResult) => {
 console.log(`File saved to ${outputFile}`);
  const base64img = result.base64img;
}).catch((errors: Array<RemoveBgError>) => {
 console.log(JSON.stringify(errors));
});
```
