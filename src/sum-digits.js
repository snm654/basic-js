const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let result = ''
  result += arguments[0]
  let result2 = result.split('').map(el => +el).reduce((acc, next) => acc + next)
  result2 = Array.of(result2)
  result = result2.join('').split('')

  if (result.length > 1) {
    result2 = result.map(el => +el).reduce((acc, next) => acc + next)
    result2 = Array.of(result2)
    result = result2.join('').split('')
  }
  return +result.join('')
}



module.exports = {
  getSumOfDigits
};
