# EmojiAPI
Simple Emoji API.

# Installing

```sh
$ npm i emoji-api
```

# Example

```js
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();

emoji.get("😂")
    .then(emoji => {
        console.log(emoji);
    })

/*
Emoji {
  emoji: '😂',
  unicode: 'U+1F602',
  name: 'Face with Tears of Joy',
  description: 'A yellow face with a big grin, uplifted eyebrows, and smiling eyes, each shedding a tear from laughing so hard. Widely used to show something is funny or pleasing.',
  images: [
    {
      index: 0,
      vendor: 'Apple',
      url: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/face-with-tears-of-joy_1f602.png'
    },
    {
      index: 1,
      vendor: 'Google',
      url: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/274/face-with-tears-of-joy_1f602.png'
    },
    {
      index: 2,
      vendor: 'Samsung',
      url: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/samsung/265/face-with-tears-of-joy_1f602.png'
    },
    {
      index: 3,
      vendor: 'Microsoft',
      url: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/209/face-with-tears-of-joy_1f602.png'
    },
    {
      index: 4,
      vendor: 'WhatsApp',
      url: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/whatsapp/273/face-with-tears-of-joy_1f602.png'
    },
    {
      index: 5,
      vendor: 'Twitter',
      url: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/face-with-tears-of-joy_1f602.png'
    },
    {
      index: 6,
      vendor: 'Facebook',
      url: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/230/face-with-tears-of-joy_1f602.png'
    },
    {
      index: 7,
      vendor: 'JoyPixels',
      url: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/joypixels/257/face-with-tears-of-joy_1f602.png'
    },
    {
      index: 8,
      vendor: 'OpenMoji',
      url: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/openmoji/272/face-with-tears-of-joy_1f602.png'
    },
    {
      index: 9,
      vendor: 'emojidex',
      url: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/emojidex/112/face-with-tears-of-joy_1f602.png'
    },
    {
      index: 10,
      vendor: 'Messenger',
      url: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/65/face-with-tears-of-joy_1f602.png'
    },
    {
      index: 11,
      vendor: 'LG',
      url: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/lg/57/face-with-tears-of-joy_1f602.png'
    },
    {
      index: 12,
      vendor: 'HTC',
      url: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/htc/122/face-with-tears-of-joy_1f602.png'
    },
    {
      index: 13,
      vendor: 'Mozilla',
      url: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/mozilla/36/face-with-tears-of-joy_1f602.png'
    },
    {
      index: 14,
      vendor: 'SoftBank',
      url: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/softbank/145/face-with-tears-of-joy_1f602.png'
    },
    {
      index: 15,
      vendor: 'Docomo',
      url: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/docomo/205/face-with-tears-of-joy_1f602.png'
    },
    {
      index: 16,
      vendor: 'au by KDDI',
      url: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/au-kddi/190/face-with-tears-of-joy_1f602.png'
    }
  ],
  shortCodes: [ ':joy:', ':face_with_tears_of_joy:' ]
}
*/
```