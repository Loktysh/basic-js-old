const CustomError = require("../extensions/custom-error");

const chainMaker = {
  str: [],
  getLength() {
      // len = this.str.length;
      // this.str.push(len);
      return this.str.length
  },
  addLink(value) {
      e = value + '';
      this.str.push(e);
      return this
  },
  removeLink(position) {
    if( typeof(position) != 'number' || (position^0) !== position || position <= 0 || position > this.str.length ) 
    {
      this.str = [];
      throw new Error('Invalid position number');
    }
      this.str.splice(position-1, 1);
      return this
  },
  reverseChain() {
      this.str.reverse();
      return this
  },
  finishChain() {
      let res = this.str.map((c,i) => i === 0 ? `(`+` ${c} `+`)`: `~~(`+` ${c} `+`)`).join('');
      this.str = [];
      return res
  }
};

module.exports = chainMaker;
