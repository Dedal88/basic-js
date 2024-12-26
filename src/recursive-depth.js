const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    for (let i of arr) {
      if (Array.isArray(i)) {
        let insideDep = this.calculateDepth(i) + 1;
        depth = Math.max(depth, insideDep);
        if (i.length === 0) {
          break;
        }
      }
    }
    return depth;
  }
}

module.exports = {
  DepthCalculator,
};
