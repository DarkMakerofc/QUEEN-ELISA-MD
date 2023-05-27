[![npm version][npm-image]][npm-url]
[![downloads][downloads-image]][npm-url]
[![build status][build-image]][build-url]
[![Language grade: JavaScript][lgtm-image]][lgtm-url]
[![Install size][packagephobia-image]][packagephobia-url]


# Awesome phonenumber parser

This library is a pre-compiled version of Google's `libphonenumber`, with a slightly simpler interface. It has a minimal footprint - is by far the smallest libphonenumber-based library available on npmjs, and has no dependencies.

TypeScript typings are provided within the package.

Uses libphonenumber v8.12.48

## Comparison with other libraries

Since this library is pre-compiled, it doesn't depend on the closure compiler, and needs not load it on start. This makes the library faster and saves you a lot of space. It also means this library is trivial to use in any `webpack` project (or using any other means to run in the browser).

Among all the popular phone number using Google's `libphonenumber` (or mimicing it), only this one, `google-libphonenumber` and `libphonenumber-js` have decent README's with examples. *This may have changed since first doing these benchmarks*.

A library should be quick to load (`require()`), quick to parse first time and all consecutive times. It shouldn't bloat your `node_modules`, and it should have a small memory footprint, if possible.

The following is the result of a test program which loads the library, then parses a phone number, and then once again. It's called 100 times for each library and the mean values are shown here. Parsing a phone number first time might be slower because of initially compiling/optimizing regular expressions and whatnot. Parsing a phone number a second time will show the speed of likely all future parsing within that process.

Action                    | awesome-phonenumber<br/>2.56.0<br/>(lib 8.12.29) | google-libphonenumber<br/>3.2.22<br/>(lib 8.12.27) | libphonenumber-js<br/>1.9.23<br/>(lib -)
------------------------- | ------------------- | --------------------- | ----------------
Load library first time         | 11.0 ms ✅          | 29.67 ms              | 32.87 ms
Parse first phone number        | 4.3 ms              | 4.01 ms               | 3.43 ms ✅
**⇒ Load + parse first number** | 15.3 ms ✅          | 33.68 ms              | 36.3 ms
Parse second phone number       | 0.78 ms ✅          | 0.97 ms               | 0.92 ms
Increased memory usage          | 5.12 M ✅           | 9.99 M                | 5.86 M
node_modules size               | 296 K ✅            | 600 K                 | 7.6 M
node_modules files              | 8                   | 7 ✅                  | 653


## Basic usage
```js
var PhoneNumber = require( 'awesome-phonenumber' );

var pn = new PhoneNumber( '0707123456', 'SE' );
pn.isValid( );  // -> true
pn.isMobile( ); // -> true
pn.canBeInternationallyDialled( ); // -> true
pn.getNumber( );                   // -> '+46707123456'
pn.getNumber( 'e164' );            // -> '+46707123456' (default)
pn.getNumber( 'international' );   // -> '+46 70 712 34 56'
pn.getNumber( 'national' );        // -> '070-712 34 56'
pn.getNumber( 'rfc3966' );         // -> 'tel:+46-70-712-34-56'
pn.getNumber( 'significant' );     // -> '707123456'
pn.getRegionCode( );               // -> 'SE'
pn.getCountryCode( );              // -> 46

pn.toJSON( );                  // -> json blob, so that:
JSON.stringify( pn, null, 4 ); // -> This:
// {
//     "canBeInternationallyDialled": true,
//     "number": {
//         "input": "0707123456",
//         "international": "+46 70 712 34 56",
//         "national": "070-712 34 56",
//         "e164": "+46707123456",
//         "rfc3966": "tel:+46-70-712-34-56",
//         "significant": "707123456"
//     },
//     "regionCode": "SE",
//     "valid": true,
//     "possible": true,
//     "type": "mobile",
//     "possibility": "is-possible"
// }
```

### Detect country

When constructed with a phone number on `e164` format (i.e. prefixed with a `+`), awesome-phonenumber will auto-detect the country:

```js
PhoneNumber( '+46707123456' ).getRegionCode( ); // -> 'SE'
```

## API types

The API consists of the `PhoneNumber` class which sometimes uses *enums*. These are:

### <a name="phone-number-types"></a>Phone number types
```js
'fixed-line'
'fixed-line-or-mobile'
'mobile'
'pager'
'personal-number'
'premium-rate'
'shared-cost'
'toll-free'
'uan'
'voip'
'unknown'
```

### Phone number possibilities

```js
'is-possible'
'invalid-country-code'
'too-long'
'too-short'
'unknown'
```

### Phone number formats

```js
'international'
'national'
'e164'
'rfc3966'
'significant'
```

## API functions

### Library
```js
var PhoneNumber = require( 'awesome-phonenumber' );
```

### Country codes

There are conversion functions between the 2-character ISO 3166-1 region codes (e.g. 'SE' for Sweden) and the corresponding country calling codes.

```js
PhoneNumber.getCountryCodeForRegionCode( regionCode );  // -> countryCode
PhoneNumber.getRegionCodeForCountryCode( countryCode ); // -> regionCode
```

#### Example

```js
PhoneNumber.getCountryCodeForRegionCode( 'SE' ); // -> 46
PhoneNumber.getRegionCodeForCountryCode( 46 );   // -> 'SE'
```

### Supported calling codes

```js
PhoneNumber.getSupportedCallingCodes( ); // -> [ calling codes... ]
```

### Supported region codes

```js
PhoneNumber.getSupportedRegionCodes( ); // -> [ region codes... ]
```

### Phone numbers

An instance of the `PhoneNumber` class will be created even if `PhoneNumber` is called as a function.

```js
var pn = PhoneNumber( number, regionCode );
// is the same as
var pn = new PhoneNumber( number, regionCode );
```

PhoneNumber objects can also be created using the `getExample( regionCode[, type ] )` function, see section [Example phone numbers for country](#example) below.

```js
pn.toJSON( );               // -> json blob as seen in "Basic usage" above
pn.isValid( );              // -> Boolean
pn.isPossible( );           // -> Boolean
pn.getType( );              // -> Any of the "Phone number types" defined above
pn.isMobile( );             // -> true if type is 'mobile' or 'fixed-line-or-mobile'
pn.isFixedLine( );          // -> true if type is 'fixed-line' or 'fixed-line-or-mobile'
pn.getNumber( [ format ] ); // -> Formatted number, see "Basic usage" for examples

// Returns the number formatted to how to dial it from another region.
pn.getNumberFrom( fromRegionCode );
```

#### Example

```js
// Calling the Swedish number 0707123456 from Japan:
PhoneNumber( '0707123456', 'SE' ).getNumberFrom( 'JP' ); // '010 46 70 712 34 56'
```

### <a name="example"></a>Example phone numbers for country

Sometimes you want to display a formatted example phone number for a certain country (and maybe also a certain type of phone number). The `getExample` function is used for this.

```js
PhoneNumber.getExample( regionCode[, phoneNumberType] ); // PhoneNumber object
```

The `phoneNumberType` is any of the [types defined above](#phone-number-types).

#### Example

```js
PhoneNumber.getExample( 'SE' ).getNumber( );                      // '+468123456'
PhoneNumber.getExample( 'SE', 'mobile' ).getNumber( );            // '+46701234567'
PhoneNumber.getExample( 'SE', 'mobile' ).getNumber( 'national' ); // '070 123 45 67'
```

### As-you-type formatting

You can use an `AsYouType` class to format a phone number as it is being typed. An instance of this class is retrieved by `var ayt = PhoneNumber.getAsYouType( regionCode )`, and has the following methods:

```js
// Add a character to the end of the number
ayt.addChar( nextChar );

// Get the current formatted number
ayt.number( );

// Remove the last character
ayt.removeChar( );

// Replace the whole number with a new number (or an empty number if null)
ayt.reset( [ number ] );

// Get a PhoneNumber object representing the current number
ayt.getPhoneNumber( );
```

All the functions above except `getPhoneNumber( )` return the current formatted number (as a String of course, as it may include spaces and other characters).

#### Example

```js
var ayt = PhoneNumber.getAsYouType( 'SE' );
ayt.addChar( '0' ); // -> '0'
ayt.addChar( '7' ); // -> '07'
ayt.addChar( '0' ); // -> '070'
ayt.addChar( '7' ); // -> '070 7'
ayt.addChar( '1' ); // -> '070 71'
ayt.addChar( '2' ); // -> '070 712'
ayt.addChar( '3' ); // -> '070 712 3'
ayt.addChar( '4' ); // -> '070 712 34'
ayt.addChar( '5' ); // -> '070 712 34 5'
ayt.addChar( '6' ); // -> '070 712 34 56'
ayt.removeChar( );  // -> '070 712 34 5'
ayt.addChar( '7' ); // -> '070 712 34 57'
```

[npm-image]: https://img.shields.io/npm/v/awesome-phonenumber.svg
[npm-url]: https://npmjs.org/package/awesome-phonenumber
[downloads-image]: https://img.shields.io/npm/dm/awesome-phonenumber.svg
[build-image]: https://img.shields.io/github/workflow/status/grantila/awesome-phonenumber/Master.svg
[build-url]: https://github.com/grantila/awesome-phonenumber/actions?query=workflow%3AMaster
[lgtm-image]: https://img.shields.io/lgtm/grade/javascript/g/grantila/awesome-phonenumber.svg?logo=lgtm&logoWidth=18
[lgtm-url]: https://lgtm.com/projects/g/grantila/awesome-phonenumber/context:javascript
[packagephobia-image]: https://packagephobia.now.sh/badge?p=awesome-phonenumber
[packagephobia-url]: https://packagephobia.now.sh/result?p=awesome-phonenumber
