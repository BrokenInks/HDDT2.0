var colors = require('../lighter-colors')
var is = global.is || require('exam/lib/is')

describe('String.colors', function () {
  it('toggles color on and off', function () {
    colors.enable()
    is(colors.enabled, true)
    is.same('ERROR'.red, '\u001b[31mERROR\u001b[39m')
    colors.disable()
    is(colors.enabled, false)
    is.same('ERROR'.red, 'ERROR')
    colors.enable()
  })
})

describe('String.prototype', function () {
  it('.plain', function () {
    is('OK'.red.plain, 'OK')
  })
  it('.reset', function () {
    is('OK'.reset, '\u001b[0mOK')
  })
  it('.base', function () {
    is('OK'.base, '\u001b[39mOK')
  })
  it('.bgBase', function () {
    is('OK'.bgBase, '\u001b[49mOK')
  })
  it('.bold', function () {
    is('OK'.bold, '\u001b[1mOK\u001b[21m')
  })
  it('.normal', function () {
    is('OK'.normal, '\u001b[2mOK\u001b[22m')
  })
  it('.italic', function () {
    is('OK'.italic, '\u001b[3mOK\u001b[23m')
  })
  it('.underline', function () {
    is('OK'.underline, '\u001b[4mOK\u001b[24m')
  })
  it('.inverse', function () {
    is('OK'.inverse, '\u001b[7mOK\u001b[27m')
  })
  it('.hidden', function () {
    is('OK'.hidden, '\u001b[8mOK\u001b[28m')
  })
  it('.strike', function () {
    is('OK'.strike, '\u001b[9mOK\u001b[29m')
  })
  it('.black', function () {
    is('OK'.black, '\u001b[30mOK\u001b[39m')
  })
  it('.red', function () {
    is('OK'.red, '\u001b[31mOK\u001b[39m')
  })
  it('.green', function () {
    is('OK'.green, '\u001b[32mOK\u001b[39m')
  })
  it('.yellow', function () {
    is('OK'.yellow, '\u001b[33mOK\u001b[39m')
  })
  it('.blue', function () {
    is('OK'.blue, '\u001b[34mOK\u001b[39m')
  })
  it('.magenta', function () {
    is('OK'.magenta, '\u001b[35mOK\u001b[39m')
  })
  it('.cyan', function () {
    is('OK'.cyan, '\u001b[36mOK\u001b[39m')
  })
  it('.white', function () {
    is('OK'.white, '\u001b[37mOK\u001b[39m')
  })
  it('.gray', function () {
    is('OK'.gray, '\u001b[90mOK\u001b[39m')
  })
  it('.bgBlack', function () {
    is('OK'.bgBlack, '\u001b[40mOK\u001b[49m')
  })
  it('.bgRed', function () {
    is('OK'.bgRed, '\u001b[41mOK\u001b[49m')
  })
  it('.bgGreen', function () {
    is('OK'.bgGreen, '\u001b[42mOK\u001b[49m')
  })
  it('.bgYellow', function () {
    is('OK'.bgYellow, '\u001b[43mOK\u001b[49m')
  })
  it('.bgBlue', function () {
    is('OK'.bgBlue, '\u001b[44mOK\u001b[49m')
  })
  it('.bgMagenta', function () {
    is('OK'.bgMagenta, '\u001b[45mOK\u001b[49m')
  })
  it('.bgCyan', function () {
    is('OK'.bgCyan, '\u001b[46mOK\u001b[49m')
  })
  it('.bgWhite', function () {
    is('OK'.bgWhite, '\u001b[47mOK\u001b[49m')
  })
})
