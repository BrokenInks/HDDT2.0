Cute.stamp = function (date) {
  date = Cute.getDate(date)
  var utc = date.toUTCString()
  var mask = /^.*?(\d+) (\w+) (\d+) ([\d:]+).*?$/
  date = utc.replace(mask, function (all, day, month, year, time) {
    month = Cute.zeroFill(date.getMonth(), 2)
    time += '.' + Cute.zeroFill(date.getMilliseconds(), 3)
    return year + '-' + month + '-' + day + 'T' + time + 'Z'
  })
  return date
}

Cute.all = function (parent, selector, fn) {
  if (!selector || Cute.isFunction(selector)) {
    fn = selector
    selector = parent
    parent = document
  }
  var elements = []
  if (Cute.contains(selector, ',')) {
    Cute.each(selector, function (selector) {
      Cute.all(parent, selector, function (element) {
        elements.push(element)
      })
    })
  } else if (Cute.contains(selector, ' ')) {
    var pos = selector.indexOf(' ')
    var preSelector = selector.substr(0, pos)
    var postSelector = selector.substr(pos + 1)
    elements = []
    Cute.all(parent, preSelector, function (element) {
      var children = Cute.all(element, postSelector)
      Cute.merge(elements, children)
    })
  } else if (selector[0] === '#') {
    var id = selector.substr(1)
    var child = Cute.id(parent.ownerDocument || document, id)
    if (child) {
      var up = Cute.parent(child)
      while (up) {
        if (up === parent) {
          elements = [child]
          break
        }
        up = Cute.parent(up)
      }
    }
  } else {
    selector = selector.split('.')
    var tagName = selector[0]
    var className = selector[1]
    var tagElements = parent.getElementsByTagName(tagName)
    Cute.each(tagElements, function (element) {
      if (!className || Cute.classes(element, className)) {
        elements.push(element)
      }
    })
  }
  if (fn) {
    Cute.each(elements, fn)
  }
  return elements
}

Cute.one = function (parent, selector, fn) {
  if (!selector || Cute.isFunction(selector)) {
    fn = selector
    selector = parent
    parent = document
  }
  var element = Cute.all(parent, selector)[0]
  if (element && fn) {
    fn(element)
  }
  return element
}
