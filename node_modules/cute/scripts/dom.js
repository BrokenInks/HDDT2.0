/**
 * Get an element by its ID (if the argument is an ID).
 * If you pass in an element, it just returns it.
 * This can be used to ensure that you have an element.
 *
 * @param  {DOMElement}        parent  Optional element to call getElementById on (default: document).
 * @param  {string|DOMElement} idOrElement    ID of an element, or the element itself.
 * @return {DOMElement}                       The matching element, or undefined.
 */
Cute.id = function (parent, idOrElement) {
  if (!idOrElement) {
    idOrElement = parent
    parent = document
  }
  return Cute.isString(idOrElement) ? parent.getElementById(idOrElement) : idOrElement
}

/**
 * Get or set the parent of an element.
 *
 * @param  {DOMElement} element    A element whose parent we want to get/set.
 * @param  {String}      parent     An optional parent to add the element to.
 * @param  {String}      before     An optional child to insert the element before.
 * @return {DOMElement}            The parent of the element.
 */
Cute.parent = function (element, parent, before) {
  if (parent) {
    parent.insertBefore(element, before || null)
  } else {
    parent = element.parentNode
  }
  return parent
}

/**
 * Get an element's ancestors, optionally filtered by a selector.
 *
 * @param  {DOMElement} element   An element to start from.
 * @param  {String}      selector  An optional selector to filter ancestors.
 * @return {Array}                 The array of ancestors.
 */
Cute.up = function (element, selector) {
  var ancestors = []
  while (element = Cute.parent(element)) { // eslint-disable-line
    ancestors.push(element)
  }
  ancestors = Cute.filter(ancestors, function (element) {
    return Cute.matches(element, selector)
  })
  return ancestors
}

/**
 * Get the child nodes of a parent element.
 *
 * @param  {DOMElement}    element  A parent element who might have child nodes.
 * @return {HTMLCollection}          The collection of child nodes.
 */
Cute.nodes = function (element) {
  return element.childNodes
}

/**
 * Get an element's index with respect to its parent.
 *
 * @param  {DOMElement} element  An element with a parent, and potentially siblings.
 * @return {Number}               The element's index, or -1 if there's no matching element.
 */
Cute.index = function (element) {
  var index = -1
  while (element) {
    ++index
    element = element.previousSibling
  }
  return index
}

/**
 * Create an element, given a specified tag identifier.
 *
 * Identifiers are of the form:
 *   tagName#id.class1.class2?attr1=value1&attr2=value2
 *
 * Each part of the identifier is optional.
 *
 * @param  {DOMElement|String} elementOrString  An element or a string used to create an element (default: div).
 * @return {DOMElement}                         The existing or created element.
 */
Cute.create = function (elementOrString) {
  var element = elementOrString
  if (Cute.isString(elementOrString)) {
    var tagAndAttributes = elementOrString.split('?')
    var tagAndClass = tagAndAttributes[0].split('.')
    var className = tagAndClass.slice(1).join(' ')
    var tagAndId = tagAndClass[0].split('#')
    var tagName = tagAndId[0] || 'div'
    var id = tagAndId[1]
    var attributes = tagAndAttributes[1]
    var isSvg = /^(svg|g|path|circle|line)$/.test(tagName)
    var uri = 'http://www.w3.org/' + (isSvg ? '2000/svg' : '1999/xhtml')
    element = document.createElementNS(uri, tagName)
    if (id) {
      element.id = id
    }
    if (className) {
      element.className = className
    }
    // TODO: Do something less janky than using query string syntax (Maybe like Ltl?).
    if (attributes) {
      attributes = attributes.split('&')
      Cute.each(attributes, function (attribute) {
        var keyAndValue = attribute.split('=')
        var key = keyAndValue[0]
        var value = keyAndValue[1]
        element[key] = value
        Cute.attr(element, key, value)
      })
    }
  }
  return element
}

/**
 * Add a child element under a parent element, optionally before another element.
 *
 * @param  {DOMElement}         parent           An optional parent element (default: document).
 * @param  {DOMElement|String}  elementOrString  An element or a string used to create an element (default: div).
 * @param  {DOMElement}         beforeSibling    An optional child to insert the element before.
 * @return {DOMElement}                          The element that was inserted.
 */
Cute.add = function (parent, elementOrString, beforeSibling) {
  if (Cute.isString(parent)) {
    beforeSibling = elementOrString
    elementOrString = parent
    parent = Cute.body()
  }
  var element = Cute.create(elementOrString)
  // If the beforeSibling value is a number, get the (future) sibling at that index.
  if (Cute.isNumber(beforeSibling)) {
    beforeSibling = Cute.nodes(parent)[beforeSibling]
  }
  // Insert the element, optionally before an existing sibling.
  if (beforeSibling) {
    parent.insertBefore(element, beforeSibling)
  } else {
    parent.appendChild(element)
  }
  return element
}

/**
 * Remove an element from its parent.
 *
 * @param  {DOMElement} element  An element to remove.
 */
Cute.remove = function (element) {
  // Remove the element from its parent, provided that it has a parent.
  var parent = Cute.parent(element)
  if (parent) {
    parent.removeChild(element)
  }
}

/**
 * Get or set an element's inner HTML.
 *
 * @param  {DOMElement} element  An element.
 * @param  {String}      html     An optional string of HTML to set as the innerHTML.
 * @return {String}               The element's HTML.
 */
Cute.html = function (element, html) {
  if (!Cute.isUndefined(html)) {
    element.innerHTML = html
  }
  return element.innerHTML
}

/**
 * Get an element's lowercase tag name.
 *
 * @param  {DOMElement} element  An element.
 * @return {String}               The element's tag name.
 */
Cute.tag = function (element) {
  return Cute.lower(element.tagName)
}

/**
 * Get or set the text of an element.
 *
 * @param  {DOMElement} element  An optional element.
 * @return {String}      text     A text string to set.
 */
Cute.text = function (element, text) {
  if (!Cute.isUndefined(text)) {
    Cute.html(element, '')
    Cute.addText(element, text)
  }
  // Get the full text, but fall back to visible text for older browsers.
  return element.textContent || element.innerText
}

/**
 * Add text to an element.
 *
 * @param  {DOMElement} element  An element.
 * @return {String}      text     A text string to add.
 */
Cute.addText = function (element, text, beforeSibling) {
  Cute.add(element, document.createTextNode(text), beforeSibling)
}

/**
 * Get, set, or delete an attribute of an element.
 *
 * @param  {DOMElement}  element  An element.
 * @param  {String}      name     An attribute name.
 * @param  {String}      value    A value to set the attribute to.
 * @return {String}               The value of the attribute.
 */
Cute.attr = function (element, name, value) {
  if (Cute.isNull(value)) {
    element.removeAttribute(name)
  } else if (Cute.isUndefined(value)) {
    value = element.getAttribute(name)
  } else {
    var old = Cute.attr(element, name)
    if (value !== old) {
      element.setAttribute(name, value)
    }
  }
  return value
}

/**
 * Add, remove or check classes on an element.
 *
 * @param  {DOMElement} element     An element to change or read classes from.
 * @param  {String}      operations  Space-delimited operations to perform on
 *                                   an element's className.
 *                                     * "!name" adds the "name" class if not
 *                                       present, or removes it if present.
 *                                     * "+name" adds the "name" class.
 *                                     * "-name" removes the "name" class.
 *                                     * "name" returns 1 if the "name" class
 *                                       is present, or undefined if it isn't.
 * @return {Object}                  The map of all classes in the element's
 *                                   className, or 1 or undefined if the last queried class was found.
 */
Cute.classes = function (element, operations) {
  var map = {}
  var result = map
  var list = Cute.string(element.className).match(/\S+/g)
  Cute.each(list, function (key) {
    map[key] = 1
  })
  if (operations) {
    operations.replace(/([!\+-]*)?(\S+)/g, function (match, op, key) {
      var value = map[key]
      if (op === '!') {
        value = !value
      } else if (op === '+') {
        value = 1
      } else if (op === '-') {
        value = 0
      } else {
        result = value ? 1 : 0
      }
      map[key] = value
    })
    list = []
    Cute.each(map, function (value, key) {
      if (value) {
        list.push(key)
      }
    })
    element.className = list.join(' ')
  }
  return result
}

/**
 * Find elements matching a selector, and return or run a function on them.
 *
 * Selectors are not fully querySelector compatible.
 * Selectors only support commas, spaces, IDs, tags & classes.
 *
 * @param  {DOMElement}    parent    An optional element under which to find elements.
 * @param  {String}         selector  A simple selector for finding elements.
 * @param  {Function}       fn        An optional function to run on matching elements.
 * @return {HTMLCollection}           The matching elements (if any).
 */
Cute.all = function (parent, selector, fn) {
  if (!selector || Cute.isFunction(selector)) {
    fn = selector
    selector = parent
    parent = document
  }
  var elements = parent.querySelectorAll(selector)
  if (fn) {
    Cute.each(elements, fn)
  }
  return elements
}

/**
 * Find an element matching a selector, optionally run a function on it, and return it.
 *
 * @param  {DOMElement} parent  An optional element under which to find an element.
 * @param  {String}      selector       A simple selector for finding an element.
 * @param  {Function}    fn             An optional function to run on a matching element.
 * @return {DOMElement}                The matching element (if any).
 */
Cute.one = function (parent, selector, fn) {
  if (!selector || Cute.isFunction(selector)) {
    fn = selector
    selector = parent
    parent = document
  }
  var element = parent.querySelector(selector)
  if (element && fn) {
    fn(element)
  }
  return element
}

/**
 * Update a DOM node based on the contents of another.
 *
 * @param  {DOMElement} domNode     The DOM node to merge into.
 * @param  {DOMElement} newNode     The virtual DOM to merge from.
 */
Cute.update = function (domNode, newNode) {
  var domChild = domNode.firstChild || 0
  var newChild = newNode.firstChild || 0
  while (newChild) {
    var domTag = domChild.tagName
    var newTag = newChild.tagName
    var domNext = domChild.nextSibling || 0
    var newNext = newChild.nextSibling || 0
    if ((domTag !== newTag) || Cute.lower(newTag) === 'svg') {
      domNode.insertBefore(newChild, domChild || null)
      if (domChild) {
        domNode.removeChild(domChild)
      }
      domChild = domNext
    } else {
      if (newTag) {
        Cute.update(domChild, newChild)
      } else if (domChild) {
        domChild.textContent = newChild.textContent
      } else {
        domNode.appendChild(newChild)
      }
      domChild = domNext
    }
    newChild = newNext
  }
  while (domChild) {
    domNext = domChild.nextSibling
    domNode.removeChild(domChild)
    domChild = domNext
  }
  var map = {}
  function mapAttributes (element, index) {
    Cute.each(element.attributes, function (attribute) {
      map[attribute.name] = index ? attribute.value : null
    })
  }
  mapAttributes(domNode, 0)
  mapAttributes(newNode, 1)
  Cute.each(map, function (value, name) {
    Cute.attr(domNode, name, value)
  })
}
