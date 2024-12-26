const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const total = names.slice(0);
  let count = 0;
  for (let i = 0; i < total.length; i++) {
    for (let j = i + 1; j < total.length; j++) {
      if (total[i] === total[j]) {
        total[j] += `(${count + 1})`;
        count++;
      }
    }
    count = 0;
  }
  return total;
}

module.exports = {
  renameFiles,
};
