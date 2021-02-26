/**
 * Set style properties on a given element.
 *
 * @param  {DOMElement} element  Element to set style properties on.
 * @param  {Object}     map      Optional style property map.
 * @return {Object}              Style property of the element.
 */
Cute.style = function (element, map) {
  var style = Cute.prop(element, 'style', 0)
  Cute.each(map, function (value, key) {
    style[key] = value
  })
  return style
}

/**
 * Scroll a page to a position or element.
 *
 * @param  {Integer|String|Object} to         A name, ID, element or Top/Left.
 * @param  {String}                direction  Default: "Top".
 */
Cute.scroll = function (to, direction) {
  direction = direction || 'Top'
  if (Cute.isString(to)) {
    to = Cute.one('a[name=' + to + '],#' + to)
  }
  if (to && Cute.isObject(to)) {
    var element = to
    to = 0
    while (element) {
      to += element['offset' + direction] || 0
      element = element.offsetParent
    }
  }
  var body = Cute.body()
  var key = 'scroll' + direction
  if (Cute.isNumber(to)) {
    body[key] = document.documentElement[key] = to
  }
  return body[key]
}

/**
 * Get or set the width and height of an element.
 *
 * @param  {DOMElement} element  Element to measure or resize.
 * @param  {Array}      size     Optional width and height.
 * @return {Array}               Width and height.
 */
Cute.size = function (element, size) {
  element = element || 0
  if (size) {
    Cute.style(element, {width: size[0], height: size[1]})
  } else {
    size = [element.offsetWidth || 0, element.offsetHeight || 0]
  }
  return size
}

/**
 * Get or set the left and top of an element.
 *
 * @param  {DOMElement} element   Element to measure or resize.
 * @param  {Array}      position  Optional left and top.
 * @return {Array}                Left and top.
 */
Cute.position = function (element, position) {
  element = element || 0
  if (position) {
    Cute.style(element, {left: position[0], top: position[1]})
  } else {
    position = [element.offsetLeft || 0, element.offsetTop || 0]
  }
  return position
}

/**
 * Get the width and height of the viewport as an array.
 *
 * @return {Array} [width, height]
 */
Cute.viewport = function () {
  function dim (key) {
    return Math.max(document.documentElement['client' + key] || 0, window['inner' + key] || 0)
  }
  return [dim('Width'), dim('Height')]
}
