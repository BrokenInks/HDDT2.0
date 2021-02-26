/**
 * Get or set an item in local storage.
 *
 * @param  {String} key    A key to fetch an object by.
 * @param  {Any}    value  A value to be stringified and stored.
 * @return {Any}           The object that was fetched and deserialized
 */
Cute.item = function (key, value) {
  var storage = window.localStorage

  // If no value is passed in, get a value.
  if (Cute.isUndefined(value)) {
    value = storage.getItem(key)
    value = Cute.parse(value, value)

  // A null value indicates that we want the actual value to be removed.
  } else if (Cute.isNull(value)) {
    storage.removeItem(key)
    value = undefined

  // If a non-null value is passed in, store it.
  } else {
    storage.setItem(key, Cute.stringify(value))
  }
  return value
}
