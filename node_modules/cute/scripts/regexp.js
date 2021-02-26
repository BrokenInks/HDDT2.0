/**
 * Get the contents of a specified type of tag within a string of HTML.
 *
 * @param  {String}   html     A string of HTML.
 * @param  {String}   tagName  The type of tag to find.
 * @param  {Function} fn       A function to call on each content block.
 * @return {Array}             The array of contents.
 */
Cute.tagContents = function (html, tagName, fn) {
  var pattern = Cute.tagPatterns[tagName]
  if (!pattern) {
    var flags = /^(html|head|title|body)$/.test(tagName) ? 'i' : 'gi'
    pattern = new RegExp('<' + tagName + '.*?>([\\s\\S]*?)<\\/' + tagName + '>', flags)
    Cute.tagPatterns[tagName] = pattern
  }
  var contents = []
  html.replace(pattern, function (match, content) {
    contents.push(content)
    if (fn) {
      fn(content)
    }
  })
  return contents
}

Cute.tagPatterns = {}
