const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!")
  if (arr.length === 0) return arr
  let result = arr.map(el => el)  // закрытие map
  for (let i = 0; i < result.length; i++) {
    if (result[i] === '--discard-prev' && result[i - 1] !== undefined) {
      delete result[i - 1]
    }
    if (result[i] === '--discard-next' && result[i + 1] !== undefined) {
      delete result[i + 1]
    }
    if (result[i] === '--double-next' && result[i + 1] !== undefined) {
      result[i] = result[i + 1]
    }
    if (result[i] === '--double-prev' && result[i - 1] !== undefined) {
      result[i] = result[i - 1]
    }
  }
  result = result.filter(el => el !== '--discard-prev')
  result = result.filter(el => el !== '--discard-next')
  result = result.filter(el => el !== '--double-next')
  result = result.filter(el => el !== '--double-prev')

  return result.flat()
}


// console.log(transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]));
//[1, 2, 3, 4, 5]

module.exports = {
  transform
};
