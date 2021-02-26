/**
 * Get or set the value of a form element.
 *
 * @param  {DOMElement}  input      A form element.
 * @param  {String|Array} newValue  An optional new value for the element.
 * @return {String|Array}           The current or new value.
 */
Cute.value = function (input, newValue) {
  if (!input) {
    return
  }
  var type = input.type[0]
  var value = input.value
  var options = input.options
  var setNew = arguments.length > 1

  var items, isMulti, flag
  if (type === 'c' || type === 'r') {
    var form = input.form || document
    var selector = 'input[name=' + input.name + ']'
    items = Cute.all(form, selector)
    isMulti = (type === 'c' && items.length > 1)
    flag = 'checked'
  } else if (options) {
    items = options
    isMulti = input.multiple
    flag = 'selected'
  }
  if (items) {
    var matches = {}
    var array = Cute.array(newValue)
    Cute.each(array, function (value) {
      matches[value] = 1
    })
    value = []
    Cute.each(items, function (input) {
      var isMatch = !!matches[input.value]
      if (setNew) {
        input[flag] = isMatch
      } else if (input[flag]) {
        value.push(input.value)
      }
    })
    if (!isMulti) {
      value = value[0]
    }
  } else if (setNew) {
    input.value = newValue
  }
  return setNew ? newValue : value
}
