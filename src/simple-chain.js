/**
 * Implement chainMaker object according to task description
 *
 */
export default {
  str: [],
  getLength() {
    // len = this.str.length;
    // this.str.push(len);
    return this.str.length;
  },
  addLink(value) {
    let e = value + "";
    this.str.push(e);
    return this;
  },
  removeLink(position) {
    if (
      typeof position != "number" ||
      (position ^ 0) !== position ||
      position <= 0 ||
      position > this.str.length
    ) {
      this.str = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.str.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.str.reverse();
    return this;
  },
  finishChain() {
    let res = this.str
      .map((c, i) => (i === 0 ? `(` + ` ${c} ` + `)` : `~~(` + ` ${c} ` + `)`))
      .join("");
    this.str = [];
    return res;
  },
};
