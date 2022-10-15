const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  let result = ''
  if (str === '') return ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) result += `${count}${str[i]} `
    if (str[i] === str[i + 1]) {
      count++
    } else {count = 1}
  }  
  result = result.split('')
  return  result.filter(el => el !== '1' && el !== ' ').join('')
}


let a = encodeLine('aabbbc')
console.log(encodeLine('aabbbc'));
module.exports = {
  encodeLine
};
