/**
 * Check whether a value is undefined.
 *
 * @param  {Any}     value  A value to check.
 * @return {Boolean}        True if the value is undefined.
 */
Cute.isUndefined = function (value) {
  return typeof value === 'undefined'
}

/**
 * Check whether a value is a boolean.
 *
 * @param  {Any}     value  A value to check.
 * @return {Boolean}        True if the value is a boolean.
 */
Cute.isBoolean = function (value) {
  return typeof value === 'boolean' || value instanceof Boolean
}

/**
 * Check whether a value is a number.
 *
 * @param  {Any}     value  A value to check.
 * @return {Boolean}        True if the value is a number.
 */
Cute.isNumber = function (value) {
  return typeof value === 'number' || value instanceof Number
}

/**
 * Check whether a value is a string.
 *
 * @param  {Any}     value  A value to check.
 * @return {Boolean}        True if the value is a string.
 */
Cute.isString = function (value) {
  return typeof value === 'string' || value instanceof String
}

/**
 * Check whether a value is a function.
 *
 * @param  {Any}     value  A value to check.
 * @return {Boolean}        True if the value is a function.
 */
Cute.isFunction = function (value) {
  return typeof value === 'function'
}

/**
 * Check whether a value is an object.
 *
 * @param  {Any}     value  A value to check.
 * @return {Boolean}        True if the value is an object.
 */
Cute.isObject = function (value) {
  return typeof value === 'object'
}

/**
 * Check whether a value is null.
 *
 * @param  {Any}     value  A value to check.
 * @return {Boolean}        True if the value is null.
 */
Cute.isNull = function (value) {
  return value === null
}

/**
 * Check whether a value is an array.
 *
 * @param  {Any}     value  A value to check.
 * @return {Boolean}        True if the value is an array.
 */
Cute.isArray = function (value) {
  return value instanceof Array
}

/**
 * Check whether a value is a date.
 *
 * @param  {Any}     value  A value to check.
 * @return {Boolean}        True if the value is a date.
 */
Cute.isDate = function (value) {
  return value instanceof Date
}

/**
 * Turn a value into a string if it isn't already.
 *
 * @param  {Any}    value  A value that might be a string.
 * @return {String}        A string made from appending the given value to the
 *                         empty string.
 */
Cute.string = function (value) {
  return Cute.isString(value) ? value : '' + value
}

/**
 * Turn a value into an array if it isn't already.
 *
 * @param  {Any}     value  A value that might be an array.
 * @return {Array}          An array that is or contains the value passed in.
 */
Cute.array = function (value) {
  return Cute.isArray(value) ? value : (Cute.isUndefined(value) ? [] : [value])
}
