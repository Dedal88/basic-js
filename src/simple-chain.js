const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chainWrap: [],
  getLength() {
    return this.chainWrap.length;
  },
  addLink(value) {
    this.chainWrap.push(`( ${value} )`);

    return this;
  },
  removeLink(position) {
    if (
      position < 1 ||
      Number.isNaN(+position) ||
      position > this.chainWrap.length
    ) {
      this.chainWrap = [];
      throw new Error(`You can't remove incorrect link!`);
    } else {
      let indx = position - 1;
      this.chainWrap.splice(indx, 1);
      return this;
    }
  },
  reverseChain() {
    this.chainWrap.reverse();
    return this;
  },
  finishChain() {
    const total = this.chainWrap.join('~~');
    this.chainWrap = [];
    return total;
  },
};

module.exports = {
  chainMaker,
};
