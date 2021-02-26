/**
 * Iterate over a string, array or object.
 * Call a function on each value.
 * If the function returns zero, stop iterating.
 *
 * - For strings, the function arguments are: (character, index, collection).
 * - For arrays, the function arguments are: (value, index, collection).
 * - For objects, the arguments are: (value, key, collection).
 *
 * @param  {String|Array|Object} collection  A collection of items.
 * @param  {Function}            fn          A function to call on each item.
 * @return {Number}                          Index or key that returned false.
 */
Cute.each = function (collection, fn) {
  if (collection) {
    var length = collection.length
    var key, result
    if (Cute.isNumber(length)) {
      for (key = 0; key < length; key++) {
        result = fn(collection[key], key, collection)
        if (result === 0) {
          break
        }
      }
    } else {
      for (key in collection) {
        result = fn(collection[key], key, collection)
        if (result === 0) {
          break
        }
      }
    }
    return key
  }
}

/**
 * Decorate an object with properties from another object.
 *
 * @param  {Object} object       An object to decorate.
 * @param  {Object} decorations  An object whose properties will be used as decorations.
 * @return {Object}              The decorated object.
 */
Cute.decorate = function (object, decorations) {
  if (object) {
    Cute.each(decorations, function (value, key) {
      object[key] = value
    })
  }
  return object
}

/**
 * Get the value of an object property, and optionally set it to a default
 * value if it's not defined.
 *
 * @param  {Object} object        An object to get/set a property on.
 * @param  {String} property      The property name.
 * @param  {Any}    defaultValue  An optional default value for the property.
 * @return {Any}                  The resulting property value.
 */
Cute.prop = function (object, property, defaultValue) {
  var value = object[property]
  if (Cute.isUndefined(value)) {
    value = object[property] = defaultValue
  }
  return value
}

/**
 * Return the subset of a collection for which a filter function returns truthy.
 *
 * @param  {Array|Object} collection  A collection to filter.
 * @param  {Function}     fn          A filter function.
 * @return {Array|Object}             The filtered subset.
 */
Cute.filter = function (collection, fn) {
  var isArray = Cute.isArray(collection)
  var filtered = isArray ? [] : {}
  Cute.each(collection, function (value, key) {
    if (fn(value)) {
      if (isArray) {
        filtered.push(value)
      } else {
        filtered[key] = value
      }
    }
  })
  return filtered
}

/**
 * Merge one or more arrays into an array.
 *
 * @param  {Array}     array  An array to merge into.
 * @param  {Array...}         Items to merge into the array.
 * @return {Array}            The first array argument, with new items merged in.
 */
Cute.merge = function (array) {
  Cute.each(arguments, function (items, index) {
    if (index) {
      [].push.apply(array, items)
    }
  })
  return array
}
