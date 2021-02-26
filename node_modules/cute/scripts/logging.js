// When not in debug mode, make the logging functions do nothing.
Cute.error = Cute.no
Cute.warn = Cute.no
Cute.info = Cute.no
Cute.log = Cute.no
Cute.trace = Cute.no

// +env:debug

/**
 * Log values to the console, if it's available.
 */
Cute.error = function () {
  Cute.apply(window.console, 'error', arguments)
}

/**
 * Log values to the console, if it's available.
 */
Cute.warn = function () {
  Cute.apply(window.console, 'warn', arguments)
}

/**
 * Log values to the console, if it's available.
 */
Cute.info = function () {
  Cute.apply(window.console, 'info', arguments)
}

/**
 * Log values to the console, if it's available.
 */
Cute.log = function () {
  Cute.apply(window.console, 'log', arguments)
}

/**
 * Log values to the console, if it's available.
 */
Cute.trace = function () {
  Cute.apply(window.console, 'trace', arguments)
}

// -env:debug
