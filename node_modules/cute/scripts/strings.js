/**
 * Return true if the string contains the given substring.
 *
 * @param  {String}  string     A string to search within.
 * @param  {String}  substring  A substring to search for.
 * @return {Boolean}            True if the string contains the substring.
 */
Cute.contains = function (string, substring) {
  return Cute.string(string).indexOf(substring) > -1
}

/**
 * Return true if the string starts with the given substring.
 *
 * @param  {String}  string     A string to search within.
 * @param  {String}  beginning  A substring to search for.
 * @return {Boolean}            True if the string starts with the substring.
 */
Cute.startsWith = function (string, beginning) {
  return Cute.string(string).indexOf(beginning) === 0
}

/**
 * Returns true if the string end with the given substring.
 *
 * @param  {String}  string  A string to search within.
 * @param  {String}  ending  A substring to search for.
 * @return {Boolean}         True if the string ends with the substring.
 */
Cute.endsWith = function (string, ending) {
  string = Cute.string(string)
  return string.indexOf(ending) === (string.length - ending.length)
}

/**
 * Trim the whitespace from a string.
 *
 * @param  {String} string  A string to trim.
 * @return {String}         The trimmed string.
 */
Cute.trim = function (string) {
  return Cute.string(string).replace(/^\s+|\s+$/g, '')
}

/**
 * Split a string by commas.
 *
 * @param  {String} string  A string to split.
 * @return {Array}          The comma-delimited contents of the string.
 */
Cute.split = function (string) {
  return Cute.string(string).split(',')
}

/**
 * Convert a string to lower case.
 *
 * @param  {String} string  A string to convert to lower case.
 * @return {String}         The lowercase string.
 */
Cute.lower = function (string) {
  return Cute.string(string).toLowerCase()
}

/**
 * Convert a string to an upper case.
 *
 * @param  {String} string  A string to convert to upper case.
 * @return {String}         The uppercase string.
 */
Cute.upper = function (string) {
  return Cute.string(string).toUpperCase()
}

/**
 * Measure the length of a string.
 *
 * @param  {String} string  A string to measure.
 * @return {Number}         The string length.
 */
Cute.length = function (string) {
  return Cute.string(string).length
}

/**
 * Return an encoded string for URLs.
 *
 * @param  {String} string  A string to escape.
 * @return {String}         The escaped string.
 */
Cute.encode = function (string) {
  return encodeURIComponent(Cute.string(string))
}

/**
 * Return the decoded version of an encoded URL component.
 *
 * @param  {String} string  A string to decode.
 * @return {String}         The decoded string.
 */
Cute.decode = function (string) {
  return decodeURIComponent(Cute.string(string))
}
