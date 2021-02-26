/**
 * Empty handler.
 * @type {Function}
 */
Cute.no = function () {}

/**
 * Apply arguments to an object method.
 *
 * @param  {Object} object      An object with methods.
 * @param  {String} methodName  A method name, which may exist on the object.
 * @param  {Array}  args        An array to apply to the method.
 * @return {Object}             The result returned by the object method.
 */
Cute.apply = function (object, methodName, args) {
  return ((object || 0)[methodName] || Cute.no).apply(object, args)
}

/**
 * Try to apply arguments to an object method.
 *
 * @param  {Object} object      An object with methods.
 * @param  {String} methodName  A method name, which may exist on the object.
 * @param  {Array}  args        An array to apply to the method.
 * @return {Object}             The result returned by the object method.
 */
Cute.attempt = function (object, methodName, args) {
  try {
    Cute.apply(object, methodName, args)
  } catch (ignore) {
  }
}
