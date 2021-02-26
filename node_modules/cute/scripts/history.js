/**
 * Push, replace or pop a history item.
 *
 * @param  {String}  href     An optional href to visit (or falsy to go back).
 * @param  {Boolean} inPlace  Whether to just replace the current state.
 */
Cute.go = function (href, inPlace) {
  var history = window.history
  var method =
    href === -1 ? 'back'
    : href === 1 ? 'forward'
    : (inPlace ? 'replace' : 'push') + 'State'
  Cute.attempt(history, method, [undefined, undefined, href])
  return history
}
