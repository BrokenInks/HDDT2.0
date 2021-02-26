/**
 * Decorate a Type constructor.
 *
 * @param  {Function}  sup   Optional super constructor.
 * @param  {Function}  con   Constructor to decorate.
 * @param  {Object}    pros  Prototype properties.
 * @return {Function}        The constructor.
 */
Cute.type = function (sup, con, pros) {
  if (!pros) {
    pros = con
    con = sup
    sup = Object
  }
  var pro = con.prototype
  Cute.decorate(pro, sup.prototype)
  Cute.decorate(pro, pros)
  pro._super = sup
  return con
}
