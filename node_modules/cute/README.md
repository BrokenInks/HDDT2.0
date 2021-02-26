# <a href="http://lighter.io/cute" style="font-size:40px;text-decoration:none"><img src="https://cdn.rawgit.com/lighterio/lighter.io/master/public/cute.svg" style="width:90px;height:90px"> Cute</a>
[![Chat](https://badges.gitter.im/chat.svg)](//gitter.im/lighterio/public)
[![Version](https://img.shields.io/npm/v/cute.svg)](//www.npmjs.com/package/cute)
[![Downloads](https://img.shields.io/npm/dm/cute.svg)](//www.npmjs.com/package/cute)
[![Build](https://img.shields.io/travis/lighterio/cute.svg)](//travis-ci.org/lighterio/cute)
[![Coverage](https://img.shields.io/codecov/c/github/lighterio/cute/master.svg)](//codecov.io/gh/lighterio/cute)
[![Support](https://img.shields.io/gittip/zerious.png)](https://www.gittip.com/lighterio/)


Cute is "JavaScript You Minify", meaning Cute scripts can be concatenated
with your application code and minfied together. Functions you use will
remain intact, and functions you don't use will minify out. The end result
is that browsers will download and run your code quickly, enabling the fastest
experiences possible.

# Understanding Latency

Browser experiences are affected by three main causes of latency, which can
roughly be categorized as **hops**, **size** and **speed**.
* **Hops** to servers and back can be very latent, depending on distance to
  servers and number of subsequent hops.
* **Size** of downloads affect bandwidth usage, and large assets can cause
  long delays.
* **Speed** of browser rendering is affected by how fast a CPU is and how much
  work it needs to do.

The relationship between
[Moore's Law](http://www.nngroup.com/articles/law-of-bandwidth/) and
[Nielsen's Law](http://en.wikipedia.org/wiki/Moore%27s_law) means CPU speeds
can be expected to increase at a greater rate than bandwidth, so over time,
size becomes more important than speed. Additionally, caching is a
common solution for mitigating latency from hops, and small sizes are better
for caching, both on CDNs (saving cost) and browsers (saving space).



<!--
doNothing
responseSuccessFn
responseFailureFn
getXhr
getUpload
getResponse
forEach
each
getLength
getFirst
getLast
hasMany
push
pop
merge
padArray
getAllCookies
getCookie
setCookie
deleteCookie
getTime
getIsoDate
formatLongDate
formatShortDate
getElement
getElementsByTagName
getElementsByTagAndClass
getParent
createTag
createElement
addElement
appendElement
prependElement
wrapElement
getChildren
getIndex
insertElement
removeElement
clearElement
getHtml
setHtml
getText
setText
getAttribute
setAttribute
getData
setData
getClass
getClasses
setClass
getFirstChild
getPreviousSibling
getNextSibling
hasClass
addClass
removeClass
flipClass
toggleClass
insertScript
all
one
Emitter
EmitterPrototype
CLICK
MOUSEDOWN
MOUSEUP
KEYDOWN
KEYUP
KEYPRESS
bind
on
trigger
stopPropagation
preventDefault
bindFocusChange
bindHover
onHover
bindClick
bindWindowLoad
isReady
focusElement
doOnce
setTimer
removeTimeout
getType
getValue
setValue
getHistory
historyPush
historyReplace
historyPop
onHistoryPop
reservedWordPattern
stringify
parse
execute
parseBoolean
parseNumber
parseString
parseObject
parseArray
error
warn
info
log
trace
ifConsole
ensureNumber
zeroFill
forIn
forOf
decorateObject
ensureProperty
getStorage
fetch
store
ensureString
contains
startsWith
trim
splitByCommas
splitBySpaces
decorateString
match
extractLetters
extractNumbers
lower
upper
escape
unescape
buildQueryString
getBrowserVersionOrZero
isType
isUndefined
isBoolean
isNumber
isString
isFunction
isObject
isInstance
isArray
isDate
getHost
getBaseUrl
getQueryParams
getHashParams
onReady
-->


## More on Cute...
* [Contributing](//github.com/lighterio/cute/blob/master/CONTRIBUTING.md)
* [License (ISC)](//github.com/lighterio/cute/blob/master/LICENSE.md)
* [Change Log](//github.com/lighterio/cute/blob/master/CHANGELOG.md)
* [Roadmap](//github.com/lighterio/cute/blob/master/ROADMAP.md)
