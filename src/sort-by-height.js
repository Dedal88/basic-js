const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // создаём массив с числами по порядку без -1
  let arrSort = arr.slice(0);
  arrSort.sort((a, b) => a - b);
  for (let i = 0; i < arrSort.length; i++) {
    if (+arrSort[i] === -1) {
      arrSort.shift();
      i--;
    }
  }
  // все элементы не -1 заменяем нулями
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      arr[i] = 0;
    }
  }
  // заменяем нули отсортированными числами
  for (let i = 0; i < arr.length; i++) {
    if (+arr[i] === 0) {
      arr[i] = arrSort.shift();
    }
  }
  return arr;
}

module.exports = {
  sortByHeight,
};
