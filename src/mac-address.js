const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const itemsMac = n.split('-');

  for (let items of itemsMac) {
    if (items.length !== 2) {
      return false;
    }

    if (
      !(
        (items[1] >= '0' && items[1] <= '9') ||
        (items[1] >= 'A' && items[1] <= 'F')
      )
    ) {
      return false;
    }

    if (
      !(
        (items[0] >= '0' && items[0] <= '9') ||
        (items[0] >= 'A' && items[0] <= 'F')
      )
    ) {
      return false;
    }
  }
  return true;
}

module.exports = {
  isMAC48Address,
};
