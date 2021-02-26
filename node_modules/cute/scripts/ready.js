/**
 * Execute a function when the page loads or new content is added.
 *
 * @param  {Function}  listener  A function which will receive a ready element.
 */
Cute.ready = function (object, listener) {
  if (!listener) {
    listener = object
    object = document
  }

  // If the object is alreay ready, run the function now.
  if (Cute.isReady(object)) {
    listener(object)
  } else {
    // Create a function that replaces itself so it will only run once.
    var fn = function () {
      if (Cute.isReady(object)) {
        Cute.isReady(object, 1)
        listener(object)
        listener = Cute.no
      }
    }

    // Bind using multiple methods for a variety of browsers.
    Cute.on(object, 'readystatechange DOMContentLoaded', fn)
    Cute.on(object === document ? window : object, 'load', fn)

    // Bind to the Cute-triggered ready event.
    Cute.on(object, '_ready', fn)
  }
}

/**
 * Get or set the readiness status of an object.
 *
 * @param  {Object}  object    The object that might be ready.
 * @param  {Boolean} setReady  Whether to .
 * @return {Boolean}           Whether the object is currently ready.
 */
Cute.isReady = function (object, setReady) {
  // Declare an object to be ready, and run events that have been bound to it.
  if (setReady && !object._ready) {
    object._ready = 1
    Cute.emit(object, '_ready')
  }
  // AJAX requests have readyState 4 when loaded.
  // All documents will reach readyState=="complete".
  // In IE, scripts can reach readyState=="loaded" or readyState=="complete".
  return object._ready || /(4|complete|scriptloaded)$/.test('' + object.tagName + object.readyState)
}
