/**
 * Returns a Date object.
 *
 * @param {Date|Number|String}  date  An optional Date or Date constructor
 *                                    argument (default: now).
 * @return {Date}                     A Date object.
 */
Cute.getDate = function (date) {
  return Cute.isDate(date) ? date : date ? new Date(date) : new Date()
}

/**
 * Get Unix epoch milliseconds from a date.
 *
 * @param  {Date}   date  An optional Date object (default: now).
 * @return {Number}       Epoch milliseconds.
 */
Cute.ms = function (date) {
  return date ? Cute.getDate(date).getTime() : Date.now()
}

/**
 * Get an ISO-standard date string.
 *
 * @param {Date}    date  Date object (default: now).
 * @return {String}       ISO date string.
 */
Cute.stamp = function (date) {
  date = Cute.getDate(date)
  return date.toISOString()
}

/**
 * Take a date and return a formatted date string in long or short format:
 * - Short: "8/26/14 7:42pm"
 * - Long: "August 26, 2014 at 7:42pm"
 *
 * @param  {Object}  date         An optional Date object or argument for the
 *                                Date constructor.
 * @param  {Boolean} isLong       Whether to output the short or long format.
 * @param  {Boolean} includeTime  Whether to append the time.
 * @return {String}               The formatted date string.
 */
Cute.formatDate = function (date, isLong, includeTime) {
  date = Cute.getDate(date)
  var month = date.getMonth()
  var day = date.getDate()
  var year = date.getFullYear()
  if (isLong) {
    month = Cute.months[month]
  } else {
    month++
    year = ('' + year).substr(2)
  }
  var string
  if (!Cute.useMonthDayYear) {
    string = month
    month = day
    day = string
  }
  if (isLong) {
    string = month + ' ' + day + ', ' + year
  } else {
    string = month + '/' + day + '/' + year
  }
  if (includeTime) {
    if (isLong) {
      string += ' ' + Cute.dateTimeSeparator
    }
    string += ' ' + Cute.formatTime(date)
  }
  return string
}

/**
 * Take a date object and return a formatted time string.
 *
 * @param  {Object}  date    An optional Date object or constructor argument.
 * @return {String}          A formatted time value.
 */
Cute.formatTime = function (date) {
  date = Cute.getDate(date)
  var hour = +date.getHours()
  var minute = +date.getMinutes()
  var isAm = 1
  minute = minute > 9 ? minute : '0' + minute
  if (Cute.useTwelveHour) {
    if (hour > 11) {
      isAm = 0
      if (hour > 12) {
        hour -= 12
      }
    } else if (!hour) {
      hour = 12
    }
  } else {
    hour = hour > 9 ? hour : '0' + hour
  }
  var string = hour + ':' + minute
  if (Cute.useTwelveHour) {
    string += (isAm ? 'am' : 'pm')
  }
  return string
}

Cute.months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

// A word for separating date & time in long format.
Cute.dateTimeSeparator = 'at'

// Whether to use American-style MM/DD/YY.
Cute.useMonthDayYear = 1

// Whether to use 12-hour instead of 24-hour times.
Cute.useTwelveHour = 1
