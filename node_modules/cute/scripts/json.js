/**
 * Creates a JSON string.
 *
 * @param  {Any}    data  Data to stringify.
 * @return {String}       A JSON string.
 */
Cute.stringify = function (data, _stack) {
  if (Cute.isDate(data) ||
    data && Cute.isFunction(data.toJSON) ||
    Cute.isString(data)) {
    data = JSON.stringify(data)
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

/**
 * Create a JSON string with its double quotes escaped.
 *
 * @param  {Any}    data  Data to stringify.
 * @return {String}       A JSON string with escaped quotes.
 */
Cute.attrify = function (data) {
  return Cute.stringify(data).replace(/"/g, '&quot;')
}

/**
 * Parse JSON (or JavaScript) and return a value.
 *
 * @param  {String} js           JSON (or JavaScript).
 * @param  {Any}    alternative  Fallback value if an error occurs.
 * @return {Any}                 Value of the JSON/JS or fallback.
 */
Cute.parse = function (js, alternative) {
  try {
    /* eslint-disable */
    eval('eval.J=' + js)
    js = eval.J
    /* eslint-enable */
  } catch (ignore) {
    // +env:debug
    Cute.error('[Cute] Could not parse JS: ' + js)
    // -env:debug
    js = alternative
  }
  return js
}

/**
 * Run some JavaScript.
 *
 * @param  {String} js  JavaScript code to run.
 */
Cute.run = function (js) {
  Cute.parse('0;' + js)
}
