const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date = []) {
  let winter = [12, 1, 2],
    spring = [3, 4, 5],
    summer = [6, 7, 8],
    autumn = [9, 10, 11]

  if (typeof date === 'object' && date.length === 0) return 'Unable to determine the time of year!'
  if (!(date instanceof Date) || date.length > 0 || typeof date === 'number' || typeof date === 'function' || Object.getOwnPropertyNames(date).length > 0) throw new Error('Invalid date!')
  numberMonth = date.getMonth() + 1
  return winter.includes(numberMonth) ? 'winter' : spring.includes(numberMonth) ? 'spring' : summer.includes(numberMonth) ? 'summer' : autumn.includes(numberMonth) ? 'autumn' : 'Invalid date!'
}

module.exports = {
  getSeason
};
