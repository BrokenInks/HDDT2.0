/**
 * Extend the String prototype with terminal color methods.
 */
var ex = exports
var proto = String.prototype
ex.enable = function () {
  toggle(true)
}
ex.disable = function () {
  toggle(false)
}
var echo = function () { return this }
var arg = function (v) { return process.argv.indexOf(v) > 1 }
toggle(!arg('--no-color') && !arg('--no-colors'))

// Add a getter property to the String prototype.
function add (name, fn) {
  Object.defineProperty(proto, name, {
    enumerable: false,
    configurable: true,
    get: ex.enabled ? fn : echo
  })
}

function toggle (on) {
  ex.enabled = on
  ex.reset = on ? '\u001b[0m' : ''
  ex.base = on ? '\u001b[39m' : ''
  ex.bgBase = on ? '\u001b[49m' : ''
  ex.bold = on ? '\u001b[1m' : ''
  ex.normal = on ? '\u001b[2m' : ''
  ex.italic = on ? '\u001b[3m' : ''
  ex.underline = on ? '\u001b[4m' : ''
  ex.inverse = on ? '\u001b[7m' : ''
  ex.hidden = on ? '\u001b[8m' : ''
  ex.strike = on ? '\u001b[9m' : ''
  ex.black = on ? '\u001b[30m' : ''
  ex.red = on ? '\u001b[31m' : ''
  ex.green = on ? '\u001b[32m' : ''
  ex.yellow = on ? '\u001b[33m' : ''
  ex.blue = on ? '\u001b[34m' : ''
  ex.magenta = on ? '\u001b[35m' : ''
  ex.cyan = on ? '\u001b[36m' : ''
  ex.white = on ? '\u001b[37m' : ''
  ex.gray = on ? '\u001b[90m' : ''
  ex.bgBlack = on ? '\u001b[40m' : ''
  ex.bgRed = on ? '\u001b[41m' : ''
  ex.bgGreen = on ? '\u001b[42m' : ''
  ex.bgYellow = on ? '\u001b[43m' : ''
  ex.bgBlue = on ? '\u001b[44m' : ''
  ex.bgMagenta = on ? '\u001b[45m' : ''
  ex.bgCyan = on ? '\u001b[46m' : ''
  ex.bgWhite = on ? '\u001b[47m' : ''

  // Add getters.
  add('plain', function () { return this.replace(/\u001b\[\d+m/g, '') })
  add('reset', function () { return '\u001b[0m' + this })
  add('base', function () { return '\u001b[39m' + this })
  add('bgBase', function () { return '\u001b[49m' + this })
  add('bold', function () { return '\u001b[1m' + this + '\u001b[21m' })
  add('normal', function () { return '\u001b[2m' + this + '\u001b[22m' })
  add('italic', function () { return '\u001b[3m' + this + '\u001b[23m' })
  add('underline', function () { return '\u001b[4m' + this + '\u001b[24m' })
  add('inverse', function () { return '\u001b[7m' + this + '\u001b[27m' })
  add('hidden', function () { return '\u001b[8m' + this + '\u001b[28m' })
  add('strike', function () { return '\u001b[9m' + this + '\u001b[29m' })
  add('black', function () { return '\u001b[30m' + this + '\u001b[39m' })
  add('red', function () { return '\u001b[31m' + this + '\u001b[39m' })
  add('green', function () { return '\u001b[32m' + this + '\u001b[39m' })
  add('yellow', function () { return '\u001b[33m' + this + '\u001b[39m' })
  add('blue', function () { return '\u001b[34m' + this + '\u001b[39m' })
  add('magenta', function () { return '\u001b[35m' + this + '\u001b[39m' })
  add('cyan', function () { return '\u001b[36m' + this + '\u001b[39m' })
  add('white', function () { return '\u001b[37m' + this + '\u001b[39m' })
  add('gray', function () { return '\u001b[90m' + this + '\u001b[39m' })
  add('bgBlack', function () { return '\u001b[40m' + this + '\u001b[49m' })
  add('bgRed', function () { return '\u001b[41m' + this + '\u001b[49m' })
  add('bgGreen', function () { return '\u001b[42m' + this + '\u001b[49m' })
  add('bgYellow', function () { return '\u001b[43m' + this + '\u001b[49m' })
  add('bgBlue', function () { return '\u001b[44m' + this + '\u001b[49m' })
  add('bgMagenta', function () { return '\u001b[45m' + this + '\u001b[49m' })
  add('bgCyan', function () { return '\u001b[46m' + this + '\u001b[49m' })
  add('bgWhite', function () { return '\u001b[47m' + this + '\u001b[49m' })
}
