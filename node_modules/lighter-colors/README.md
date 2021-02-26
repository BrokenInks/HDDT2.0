# lighter-colors
[![Chat](https://badges.gitter.im/chat.svg)](//gitter.im/lighterio/public)
[![Version](https://img.shields.io/npm/v/lighter-colors.svg)](//www.npmjs.com/package/lighter-colors)
[![Downloads](https://img.shields.io/npm/dm/lighter-colors.svg)](//www.npmjs.com/package/lighter-colors)
[![Build](https://img.shields.io/travis/lighterio/lighter-colors.svg)](//travis-ci.org/lighterio/lighter-colors)
[![Coverage](https://img.shields.io/codecov/c/github/lighterio/lighter-colors/master.svg)](//codecov.io/gh/lighterio/lighter-colors)
[![Style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](//www.npmjs.com/package/standard)

The `lighter-colors` module is a lightweight terminal color utility.


## Installation

From your project directory, install and save as a dependency:
```bash
npm install --save lighter-colors
```


## Usage

Upon requiring `lighter-colors`, the String prototype is modified so that all
strings have access to color properties which output color versions of
themselves:

```js
require('lighter-colors')

console.log('Error'.red)
console.log('Warning'.yellow)
console.log('Confirmation'.green)
```

If you would like to disable color, you can use a `--no-color` argument, use
the disable method:

```js
var colors = require('lighter-colors')

colors.disable()
console.log('This will be colorless.'.magenta)

colors.enable()
console.log('This will become magenta.'.magenta)
```

Here's the full list of exported colors:

```js
{
  reset: '\u001b[0m',
  base: '\u001b[39m',
  bgBase: '\u001b[49m',
  bold: '\u001b[1m',
  normal: '\u001b[2m',
  italic: '\u001b[3m',
  underline: '\u001b[4m',
  inverse: '\u001b[7m',
  hidden: '\u001b[8m',
  strike: '\u001b[9m',
  black: '\u001b[30m',
  red: '\u001b[31m',
  green: '\u001b[32m',
  yellow: '\u001b[33m',
  blue: '\u001b[34m',
  magenta: '\u001b[35m',
  cyan: '\u001b[36m',
  white: '\u001b[37m',
  gray: '\u001b[90m',
  bgBlack: '\u001b[40m',
  bgRed: '\u001b[41m',
  bgGreen: '\u001b[42m',
  bgYellow: '\u001b[43m',
  bgBlue: '\u001b[44m',
  bgMagenta: '\u001b[45m',
  bgCyan: '\u001b[46m',
  bgWhite: '\u001b[47m'
}
```

In addition to the getter properties for the colors in the list above, there's
also a `plain` getter property which removes colors from a colorful string:

```js
require('lighter-colors')

var colorful = 'Blue'.blue
var colorless = colorful.plain
```

And if you would like to use the color sequences without invoking getter
properties, `lighter-colors` exports them for you:

```js
var colors = require('lighter-colors')
var red = colors.red
var white = colors.white
var blue = colors.blue
var base = colors.base
console.log(red + 'Red' + white + 'White' + blue + 'Blue' + base)
```

## More on lighter-colors...
* [Contributing](//github.com/lighterio/lighter-colors/blob/master/CONTRIBUTING.md)
* [License (ISC)](//github.com/lighterio/lighter-colors/blob/master/LICENSE.md)
* [Change Log](//github.com/lighterio/lighter-colors/blob/master/CHANGELOG.md)
* [Roadmap](//github.com/lighterio/lighter-colors/blob/master/ROADMAP.md)
