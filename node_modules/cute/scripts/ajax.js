/**
 * Get an XMLHttpRequest object (or ActiveX object in old IE).
 *
 * @return {XMLHttpRequest}  The request object.
 */
Cute._xhr = function () {
  return new XMLHttpRequest()
}

/**
 * Get an XMLHttpRequest upload object.
 *
 * @return {XMLHttpRequestUpload}  The request upload object.
 */
Cute.upload = function () {
  return Cute._xhr().upload
}

/**
 * Make an AJAX request, and handle it with success or failure.
 *
 * @param  {String}   url   A URL from which to request a response.
 * @param  {String}   data  An optional query, which if provided, makes a POST
 *                          request, or if `null` makes a DELETE request.
 * @param  {Function} fn    An optional function which takes (data, status) arguments.
 */
Cute.request = function (url, data, fn) {
  // If the optional data argument is omitted, zero it.
  if (Cute.isFunction(data)) {
    fn = data
    data = 0
  }
  var request = Cute._xhr()
  request.onreadystatechange = function (event) {
    if (request.readyState === 4) {
      var status = request.status
      var text = request.responseText
      var data = Cute.parse(text, data)
      fn(data, status)
    }
  }
  var method = data ? 'POST' : Cute.isNull(data) ? 'DELETE' : 'GET'
  request.open(method, url, true)
  if (data) {
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    if (!Cute.isString(data)) {
      data = Cute.stringify(data)
    }
  }
  request.send(data || null)
  return request
}
