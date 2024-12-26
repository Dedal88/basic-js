const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr1 = Array.from(s1);
  const arr2 = Array.from(s2);
  let total = 0;

  for (let i of arr1) {
    for (let j of arr2) {
      if (i === j) {
        total++;
        arr2.splice(arr2.indexOf(j), 1);
        break;
      }
    }
  }
  return total;
}

module.exports = {
  getCommonCharacterCount,
};
