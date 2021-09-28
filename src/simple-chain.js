import { NotImplementedError } from '../extensions/index.js';

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
/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  getLength() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(/* value */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(/* position */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};
