const CustomError = require("../extensions/custom-error");
let depth = 0; //Max output nubers of layers
module.exports = class DepthCalculator {
  calculateDepth(arr, layer = 1) {
    arr.map((c,i,arr) => c instanceof Array ? depth = this.calculateDepth(c, layer + 1) : depth)
    let res = depth = depth > layer ? depth : layer
    depth = 0
    return res
  }
};
// for (let i = 0; i < arr.length; i++) {
    //   arr[i] instanceof Array ? depth = this.calculateDepth(arr[i], layer + 1) : depth;
    //   console.log('Output: ', this )
    // }