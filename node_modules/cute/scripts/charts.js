/**
 * Get 100 consistent colors for charting.
 * These colors are designed to maximize visual distance.
 *
 * @return {Array}   The request object.
 */
Cute.colors = function () {
  var colors = Cute.colors._cache
  if (!colors) {
    var map = {}
    var string =
      '03f290c00eb0b0f0cbe6000605090307bf0c740f7a07f' +
      '686f97a098a0748f05a200a772d6332300b1708014dc0' +
      'c89f7a0ff045faf78304ab9798eb804020fcfd5600089' +
      '9f574be6f0f7f6405'
    colors = []
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 35; j++) {
        var color = string.substr(j * 3 + i, 3)
        if (!map[color]) {
          map[color] = 1
          colors.push('#' + color)
        }
      }
    }
    Cute.colors._cache = colors
  }
  return colors
}
