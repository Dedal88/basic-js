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
    // if (!value) {
    //   this.chainWrap.push(`(  )`);
    // }
    this.chainWrap.push(`( ${value} )`);

    return this;
  },
  removeLink(position) {
    if (
      // typeof position !== 'number' ||
      // Number.isInteger(position) !== true ||
      // !this.chainWrap[position] ||
      // Number.isNaN(+position)
      Number.isNaN(+position) ||
      position < 1 ||
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
