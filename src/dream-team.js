const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let result = ''
  if (!Array.isArray(members)) return false
  members = members.filter(el => typeof el === 'string')
  for (let i = 0; i < members.length; i++) {
    currentWord = members[i]
    currentWord = currentWord.replace(/ /g, '')
    currentLetter = currentWord[0]
    result += currentLetter.toUpperCase()
  }
  return result.split('').sort((a, b) => a > b ? -1 : 1).reverse().join('')
}


module.exports = {
  createDreamTeam
};
