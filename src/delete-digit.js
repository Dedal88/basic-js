const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = String(n)
    .split('')
    .map((i) => Number(i));
  let curCount = 0;
  for (let i of arr) {
    const copArr = arr.slice(0);
    copArr.splice(arr.indexOf(i), 1);
    const num = Number(copArr.join(''));
    if (num > curCount) {
      curCount = num;
    }
  }
  return curCount;
}

module.exports = {
  deleteDigit,
};
