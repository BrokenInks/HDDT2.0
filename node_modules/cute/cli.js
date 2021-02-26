#!/usr/bin/env node

var fs = require('fs')
var figlet = require('figlet')
var pkg = require('./package')
var cwd = process.cwd()
var dir = 'scripts'
var name = pkg.name
var version = pkg.version
var lib = name + ' ' + version
var token = pkg.token || name.toUpperCase().replace('-', '_')

require('lighter-colors')
var check = ' ' + (/^win/.test(process.platform) ? '\u221A' : '\u2714').green + ' '

/**
 * Assemble the /scripts directory of the current project, and save the
 * concatenated result as a library that's ready for RequireJS, AMD or window.
 */
figlet.text(lib, {font: 'Small'}, function (ignore, art) {
  console.log(art)
  var repo = (pkg.repository || '').replace(/(\.git|\/)$/, '') + '/blob/master/'
  var urls = []

  var js = ''
  var files = fs.readdirSync(dir)
  files.forEach(function (name) {
    var path = dir + '/' + name
    urls.push(repo + path)
    js += fs.readFileSync(path) + '\n'
  })

  var top = '/**' + art.replace(/ +$/, '').replace(/ *\n/g, '\n * ') + '\n' +
    ' *\n' +
    ' * Source:\n' +
    ' *   ' + urls.join('\n *   ') + '\n' +
    ' */\n\n' +
    'var Cute = {}\n\n'

  var concat = top + js

  var common = top +
    '// +env:any\n' +
    'if (typeof exports === \'object\') {\n' +
    '  module.exports = Cute\n' +
    '} else if (typeof define === \'function\' && define.amd) {\n' +
    '  define(function () {return Cute});\n' +
    '} else {\n' +
    '  this.Cute = Cute\n' +
    '}\n' +
    '// -env:any\n\n' + js

  var exp = /(\n?)(\s*)(Cute)\.([$_a-zA-Z0-9]+)(\s*=)?/g

  write('.js', common)
  console.log()

  // var test = fs.readFileSync('uglify-test.js')
  // var wrapped = ('(function(){' + (concat + test) + '})()')
  //   .replace(exp, function (all, br, indent, lib, key, eq) {
  //     var name = lib + '_' + key
  //     var word = br ? 'var ' : ''
  //     return br + indent + (eq ? word + name + ' =' : name)
  //   })
  // var min = uglify(wrapped)
  // fs.writeFileSync('uglify-test.min.js', min)
})

function write (extension, code) {
  var kb = (code.length / 1024).toFixed(1)
  console.log(check + name + extension + ' (' + kb + 'kb)')
  fs.writeFileSync(name + extension, code)
}


var UglifyJS = require('uglify-js')

function uglify (js) {
  js = js.replace(/\beval\b/g, '__EVIL__')
  var minified = UglifyJS
    .minify(js, {
      fromString: true
    })
    .code
    .replace(/\b__EVIL__\b/g, 'eval')

  console.log(typeof minified)
  return minified
}

/*
var fs = require('fs')
var js = fs.readFileSync('example.js').toString()
var libPattern = /(\n?)(\s*)(Cute)\.([$_a-zA-Z0-9]+)(\s*=)?/g

js = js
  .replace(libPattern, function (match, br, indent, lib, key, equals) {
    var name = lib + '_' + key
    var word = br ? 'var ' : ''
    return br + indent + (equals ? word + name + ' =' : name)
  })
*/
