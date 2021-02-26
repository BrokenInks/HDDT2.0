var fs = require('fs')

var Cute = global.Cute = exports

fs.readdirSync('scripts').forEach(function (name) {
  require('./scripts/' + name)
})
