/**
 * If the argument is numeric, return a number, otherwise return zero.
 *
 * @param  {Any}    value  A value to convert to a number, if necessary.
 * @return {Number}        The number, or zero.
 */
Cute.number = function (value) {
  return isNaN(value *= 1) ? 0 : (value || 0)
}

/**
 * Repeat a string a specified number of times.
 *
 * @param  {String} string  A string to repeat.
 * @param  {Number} times   A number of times to repeat the string.
 * @return {String}         The resulting string.
 */
Cute.repeat = function (string, times) {
  return (new Array(times + 1)).join(string)
}

/**
 * Pad a number with zeros or a string with spaces.
 *
 * @param  {Number|String} value   A value to pad.
 * @param  {Number}        length  A length to pad to.
 * @return {String}                The padded value.
 */
Cute.pad = function (value, length) {
  // Repurpose the length variable to count how much padding we need.
  length = Math.max(length - Cute.string(value).length, 0)

  // Pad based on type.
  if (Cute.isNumber(value)) {
    value = Cute.repeat('0', length) + value
  } else {
    value = value + Cute.repeat(' ', length)
  }
  return value
}
