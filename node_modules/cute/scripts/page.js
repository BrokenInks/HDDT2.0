/**
 * Get the <head> element from the document.
 *
 * @return {DOMElement}   The <head> element.
 */
Cute.head = function () {
  return Cute.one('head')
}

/**
 * Get the <head> element from the document.
 *
 * @return {DOMElement}   The <head> element.
 */
Cute.body = function () {
  return Cute.one('body')
}

/**
 * Insert an external JavaScript file.
 *
 * @param  {String}   src  A source URL of a script to insert.
 * @param  {Function} fn   An optional function to run when the script loads.
 */
Cute.js = function (src, fn) {
  var head = Cute.head()
  var script = Cute.add(head, 'script')
  if (fn) {
    Cute.ready(script, fn)
  }
  script.async = true
  script.src = src
}

/**
 * Insert CSS text to the page.
 *
 * @param  {String} css  CSS text to be inserted.
 */
Cute.css = function (css) {
  var head = Cute.head()
  var style = Cute.add(head, 'style')
  Cute.text(style, css)
  var sheet = style.styleSheet
  if (sheet) {
    sheet.cssText = css
  }
}

/**
 * Scale CSS pixel sizes using a window property.
 *
 * @param  {String} css  CSS text to be zoomed.
 */
Cute.zoom = function (css) {
  var zoom = window._zoom || 1
  return css.replace(/([\.\d]+)px\b/g, function (match, n) {
    return Math.floor(n * zoom) + 'px'
  })
}
