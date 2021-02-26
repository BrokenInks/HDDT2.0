/**
 * Read cookies, and optionally get or set one.
 *
 * @param  {String} name     An optional cookie name to get or set. If not provided, return a map.
 * @param  {Object} value    A value to be set as a string, or null if the cookie is to be deleted.
 * @param  {Object} options  Optional cookie settings, including "maxAge", "expires", "path", "domain" and "secure".
 * @return {Object}          A cookie, or a map of cookie names and values.
 */
Cute.cookie = function (name, value, options) {
  // Initialize a cookie map.
  var map = Cute.cookie.map
  if (!map) {
    map = Cute.cookie.map = {}
    var parts = document.cookie.split(/; |=/)
    for (var i = 0, l = parts.length; i < l; i++) {
      map[Cute.decode(parts[i])] = Cute.decode(parts[++i])
    }
  }

  // If no cookie is named, return the map.
  if (!name) {
    value = map

  // Otherwise, get or set one.
  } else {
    // If no value is provided, return the existing value.
    if (Cute.isUndefined(value)) {
      value = map[name]

    // If a value is provided, set the cookie to that value.
    } else {
      options = options || {}
      var pair = Cute.encode(name) + '=' + Cute.encode(value)

      var path = options.path
      var domain = options.domain
      var secure = options.secure

      // If the value is null, expire it as of one millisecond ago.
      var maxAge = Cute.isNull(value) ? -1 : options.maxAge
      var expires = maxAge ? new Date(Date.now() + maxAge) : 0

      document.cookie = pair +
        (path ? ';path=' + path : '') +
        (domain ? ';domain=' + domain : '') +
        (expires ? ';expires=' + expires.toUTCString() : '') +
        (secure ? ';secure' : '')

      map[name] = value
    }
  }
  return value
}
