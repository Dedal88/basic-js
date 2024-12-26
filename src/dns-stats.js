const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const total = {};

  domains.map((i) => {
    const arrDom = i.split('.').reverse();
    let count = '';

    arrDom.map((item) => {
      count += '.' + item;
      if (total[count]) {
        total[count]++;
      } else {
        total[count] = 1;
      }
    });
  });

  return total;
}

module.exports = {
  getDNSStats,
};
