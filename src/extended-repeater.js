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
  let total = str;
  let addStr = options.addition;

  if (!options.separator) {
    options.separator = '+';
  }

  if (!options.additionSeparator) {
    options.additionSeparator = '|';
  }

  if (
    typeof options.addition !== 'undefined' &&
    options.additionRepeatTimes > 1
  ) {
    for (let i = 1; i < options.additionRepeatTimes; i++) {
      if (options.additionSeparator) {
        addStr += options.additionSeparator + options.addition;
      } else {
        addStr += options.addition;
      }
    }
  }
  for (let i = 1; i < options.repeatTimes; i++) {
    if (addStr) {
      total += addStr + options.separator + str;
    } else {
      total += options.separator + str;
    }
  }

  if (addStr) {
    return total + addStr;
  } else {
    return total;
  }
}

module.exports = {
  repeater,
};
