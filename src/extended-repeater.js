const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (typeof str !== 'string') str + ''
  if (typeof options.addition !== 'string') options.addition + ''
  if (options.repeatTimes === undefined) options.repeatTimes = 1
  if (options.separator === undefined) options.separator = '+'
  if (options.addition === undefined) options.addition = ''
  if (options.additionSeparator === undefined && (options.addition === 'ADDITION')) options.additionSeparator = '|'
  if (options.additionSeparator === undefined) options.additionSeparator = ''
  if (options.additionRepeatTimes === undefined) options.additionRepeatTimes = 1

  let combo = `${options.addition + options.additionSeparator}`.repeat(options.additionRepeatTimes)
  combo = combo.slice(0, combo.length - options.additionSeparator.length)
  str = `${str + combo + options.separator}`.repeat(options.repeatTimes)
  let slice = str.length - options.separator.length
  str = str.slice(0, slice)
  return str
}

console.log(repeater('TESTstr', { separator: 'ds', addition: 'ADD!', additionSeparator: ')))000' })); //TESTstrADD!



module.exports = {
  repeater
};
