var is = global.is || require('exam/lib/is')
var bench = global.bench || function () {}
var proto = String.prototype
var enable = true

// Make sure we're using `red` from `colors`.
delete proto.red
require('colors')

// Define non-enumerable properties on the String prototype.
function add (name, fn) {
  Object.defineProperty(proto, name, {
    enumerable: false,
    configurable: true,
    get: enable ? fn : function () { return this }
  })
}
add('RED', function () { return '\u001b[31m' + this + '\u001b[39m' })

describe('Benchmarks', function () {
  var s
  bench('red', function () {
    it('lighter-colors', function () {
      s = 'a'.RED
      s = 'b'.RED
      s = 'c'.RED
      s = 'd'.RED
      s = 'e'.RED
      s = 'f'.RED
      s = 'g'.RED
      s = 'h'.RED
      s = 'i'.RED
      s = 'j'.RED
      s = 'a'.RED
      s = 'b'.RED
      s = 'c'.RED
      s = 'd'.RED
      s = 'e'.RED
      s = 'f'.RED
      s = 'g'.RED
      s = 'h'.RED
      s = 'i'.RED
      s = 'j'.RED
      s = 'a'.RED
      s = 'b'.RED
      s = 'c'.RED
      s = 'd'.RED
      s = 'e'.RED
      s = 'f'.RED
      s = 'g'.RED
      s = 'h'.RED
      s = 'i'.RED
      s = 'j'.RED
      s = 'a'.RED
      s = 'b'.RED
      s = 'c'.RED
      s = 'd'.RED
      s = 'e'.RED
      s = 'f'.RED
      s = 'g'.RED
      s = 'h'.RED
      s = 'i'.RED
      s = 'j'.RED
      s = 'a'.RED
      s = 'b'.RED
      s = 'c'.RED
      s = 'd'.RED
      s = 'e'.RED
      s = 'f'.RED
      s = 'g'.RED
      s = 'h'.RED
      s = 'i'.RED
      s = 'j'.RED
      s = 'a'.RED
      s = 'b'.RED
      s = 'c'.RED
      s = 'd'.RED
      s = 'e'.RED
      s = 'f'.RED
      s = 'g'.RED
      s = 'h'.RED
      s = 'i'.RED
      s = 'j'.RED
      s = 'a'.RED
      s = 'b'.RED
      s = 'c'.RED
      s = 'd'.RED
      s = 'e'.RED
      s = 'f'.RED
      s = 'g'.RED
      s = 'h'.RED
      s = 'i'.RED
      s = 'j'.RED
      s = 'a'.RED
      s = 'b'.RED
      s = 'c'.RED
      s = 'd'.RED
      s = 'e'.RED
      s = 'f'.RED
      s = 'g'.RED
      s = 'h'.RED
      s = 'i'.RED
      s = 'j'.RED
      s = 'a'.RED
      s = 'b'.RED
      s = 'c'.RED
      s = 'd'.RED
      s = 'e'.RED
      s = 'f'.RED
      s = 'g'.RED
      s = 'h'.RED
      s = 'i'.RED
      s = 'j'.RED
      s = 'a'.RED
      s = 'b'.RED
      s = 'c'.RED
      s = 'd'.RED
      s = 'e'.RED
      s = 'f'.RED
      s = 'g'.RED
      s = 'h'.RED
      s = 'i'.RED
      s = 'j'.RED
      is(s, '\u001b[31mj\u001b[39m')
    })

    it('colors', function () {
      s = 'a'.red
      s = 'b'.red
      s = 'c'.red
      s = 'd'.red
      s = 'e'.red
      s = 'f'.red
      s = 'g'.red
      s = 'h'.red
      s = 'i'.red
      s = 'j'.red
      s = 'a'.red
      s = 'b'.red
      s = 'c'.red
      s = 'd'.red
      s = 'e'.red
      s = 'f'.red
      s = 'g'.red
      s = 'h'.red
      s = 'i'.red
      s = 'j'.red
      s = 'a'.red
      s = 'b'.red
      s = 'c'.red
      s = 'd'.red
      s = 'e'.red
      s = 'f'.red
      s = 'g'.red
      s = 'h'.red
      s = 'i'.red
      s = 'j'.red
      s = 'a'.red
      s = 'b'.red
      s = 'c'.red
      s = 'd'.red
      s = 'e'.red
      s = 'f'.red
      s = 'g'.red
      s = 'h'.red
      s = 'i'.red
      s = 'j'.red
      s = 'a'.red
      s = 'b'.red
      s = 'c'.red
      s = 'd'.red
      s = 'e'.red
      s = 'f'.red
      s = 'g'.red
      s = 'h'.red
      s = 'i'.red
      s = 'j'.red
      s = 'a'.red
      s = 'b'.red
      s = 'c'.red
      s = 'd'.red
      s = 'e'.red
      s = 'f'.red
      s = 'g'.red
      s = 'h'.red
      s = 'i'.red
      s = 'j'.red
      s = 'a'.red
      s = 'b'.red
      s = 'c'.red
      s = 'd'.red
      s = 'e'.red
      s = 'f'.red
      s = 'g'.red
      s = 'h'.red
      s = 'i'.red
      s = 'j'.red
      s = 'a'.red
      s = 'b'.red
      s = 'c'.red
      s = 'd'.red
      s = 'e'.red
      s = 'f'.red
      s = 'g'.red
      s = 'h'.red
      s = 'i'.red
      s = 'j'.red
      s = 'a'.red
      s = 'b'.red
      s = 'c'.red
      s = 'd'.red
      s = 'e'.red
      s = 'f'.red
      s = 'g'.red
      s = 'h'.red
      s = 'i'.red
      s = 'j'.red
      s = 'a'.red
      s = 'b'.red
      s = 'c'.red
      s = 'd'.red
      s = 'e'.red
      s = 'f'.red
      s = 'g'.red
      s = 'h'.red
      s = 'i'.red
      s = 'j'.red
      is(s, '\u001b[31mj\u001b[39m')
    })
  })
})
