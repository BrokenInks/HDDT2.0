/**
 * Set or clear a timeout or interval. If set, save it for possible clearing.
 *
 * @param {Object}   object  An object to bind a timer to.
 * @param {String}   name    A name for the timer.
 * @param {Function} fn      A function to run if the timer is reached.
 * @param {Integer}  delay   An optional delay in milliseconds.
 * @param {Boolean}  recur   Whether to occur regularly (i.e. setInterval).
 */
Cute.wait = function (object, name, fn, delay, recur) {
  var map = Cute.prop(object, '_wait', {})
  clearTimeout(map[name])
  if (fn) {
    if (Cute.isUndefined(delay)) {
      delay = 9
    }
    map[name] = (recur ? setInterval : setTimeout)(fn, delay)
  }
}

Cute._times = {}

Cute.t = function () {
  return (window.performance || Date).now()
}

Cute.start = function (label) {
  Cute._times[label] = Cute.t()
}

Cute.end = function (label) {
  Cute._times[label] = Cute.t() - Cute._times[label]
}

Cute.logTimes = function () {
  var times = []
  Cute.each(Cute._times, function (value, key) {
    times.push(key + ' ' + value.toFixed(3) + 'ms')
  })
  Cute.log(times.join(', '))
}
