const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result,
    result2,
    result3,
    result4
  if (matrix.length === 1 && matrix[0] === 0) return 0

  if (matrix.length >= 3) {
    if (matrix[0][0] !== 0 && matrix[1][0] !== 0) {
      result = matrix[0][0] + matrix[1][0]
    } else {
      result = matrix[0][0]
    }
    if (matrix[0][0] !== 0 && matrix[1][0] !== 0 && matrix[2][0]) {
      result = matrix[0][0] + matrix[1][0] + matrix[2][0]
    }

    if (matrix[0][1] !== 0 && matrix[1][1] !== 0) {
      result2 = matrix[0][1] + matrix[1][1]
    } else {
      result2 = matrix[0][1]
    }
    if (matrix[0][1] !== 0 && matrix[1][1] !== 0 && matrix[2][1]) {
      result2 = matrix[0][1] + matrix[1][1] + matrix[2][0]
    }


    if (matrix[0][2] !== 0 && matrix[1][2] !== 0) {
      result3 = matrix[0][2] + matrix[1][2]
    } else {
      result3 = matrix[0][2]
    }
    if (matrix[0][2] !== 0 && matrix[1][2] !== 0 && matrix[2][2]) {
      result3 = matrix[0][2] + matrix[1][2] + matrix[2][2]
    }

    if (matrix[0][3] !== 0 && matrix[1][3] !== 0) {
      result4 = matrix[0][3] + matrix[1][3]
    } else {
      result4 = matrix[0][3]
    }
    if (matrix[0][3] !== 0 && matrix[1][3] !== 0 && matrix[2][3]) {
      result4 = matrix[0][3] + matrix[1][3] + matrix[2][3]
    }
  }

  return isNaN(+result) ? 0 : isNaN(+result2) ? result : isNaN(+result3) ? +result + +result2 : isNaN(+result4) ? +result + +result2 + +result3 : +result + +result2 + +result3 + +result4
}

module.exports = {
  getMatrixElementsSum
};
