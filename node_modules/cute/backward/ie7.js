Cute.xhr = function () {
  return window.XMLHttpRequest ? new XMLHttpRequest()
    : window.ActiveXObject ? new ActiveXObject('Microsoft.XMLHTTP')
    : 0
}

var jsonReplacements = {
  '"': '\\"',
  '\b': '\\b',
  '\t': '\\t',
  '\n': '\\n',
  '\f': '\\f',
  '\r': '\\r',
  '\\': '\\\\',
  '\u0000': '\\u0000',
  '\u0001': '\\u0001',
  '\u0002': '\\u0002',
  '\u0003': '\\u0003',
  '\u0004': '\\u0004',
  '\u0005': '\\u0005',
  '\u0006': '\\u0006',
  '\u0007': '\\u0007',
  '\u000b': '\\u000b',
  '\u000e': '\\u000e',
  '\u000f': '\\u000f',
  '\u0010': '\\u0010',
  '\u0011': '\\u0011',
  '\u0012': '\\u0012',
  '\u0013': '\\u0013',
  '\u0014': '\\u0014',
  '\u0015': '\\u0015',
  '\u0016': '\\u0016',
  '\u0017': '\\u0017',
  '\u0018': '\\u0018',
  '\u0019': '\\u0019',
  '\u001a': '\\u001a',
  '\u001b': '\\u001b',
  '\u001c': '\\u001c',
  '\u001d': '\\u001d',
  '\u001e': '\\u001e',
  '\u001f': '\\u001f'
}

var jsonQuote = '"'

Cute.stringify = function (data, _stack) {
  if (Cute.isDate(data)) {
    data = jsonQuote + Cute.stamp(data) + jsonQuote
  } else if (data && Cute.isFunction(data.toJSON)) {
    data = Cute.string(data.toJSON())
  } else if (Cute.isString(data)) {
    data = jsonQuote + data.replace(/["\u0000-\u001f\b\t\n\f\r\\]/g, function (c) {
      return jsonReplacements[c]
    }) + jsonQuote
  } else if (Cute.isFunction(data) || Cute.isUndefined(data)) {
    return _stack ? 'null' : undefined
  } else if (data && Cute.isObject(data) && !(data instanceof Boolean) && !(data instanceof Number)) {
    _stack = _stack || []
    var isCircular
    Cute.each(_stack, function (item) {
      if (item === data) {
        isCircular = 1
      }
    })
    if (isCircular) {
      return '"[Circular ' + (_stack.length) + ']"'
    }
    _stack.push(data)
    var isArray = Cute.isArray(data)
    var parts = []
    Cute.each(data, function (value, key) {
      value = Cute.stringify(value, _stack)
      parts.push(isArray ? value : Cute.stringify(key) + ':' + value)
    })
    _stack.pop()
    data = (isArray ? '[' : '{') + parts.join(',') + (isArray ? ']' : '}')
  } else {
    data = Cute.string(data)
  }
  return data
}
