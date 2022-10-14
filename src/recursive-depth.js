const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    function deepCount(arr) {
      let max = 0
      for (let subArr of arr) {
        if (Array.isArray(subArr)) {
          max = Math.max(deepCount(subArr), max);
        }
      }
      return max + 1;
    }
    return deepCount(arr)
  }
}



let lol = new DepthCalculator

console.log(lol.calculateDepth([1, 2, 3, 4, [1, 2, [1, 2, [[[]]]]], 5, [1, [[[[[[]]]]]]]]))       // 8

module.exports = {
  DepthCalculator
};
