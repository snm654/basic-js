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
    function deepCount(a) {
      let result = 0;
      for (let i in a) {
        if (Array.isArray(a[i])) result += 1
        if (Array.isArray(a[i])) result += deepCount(a[i]);
      }
      return result;
    }
    return deepCount(arr) + 1
    
  }
  
}

let lol = new DepthCalculator

console.log(lol.calculateDepth([1, 2, 3, 4, [1, 2, [1, 2, [[[]]]]], 5, [1, [[[[[[]]]]]]]]))       // 8

module.exports = {
  DepthCalculator
};
