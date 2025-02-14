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
// for (let i = 0; i < arr.length; i++) {
    //   arr[i] instanceof Array ? depth = this.calculateDepth(arr[i], layer + 1) : depth;
    //   console.log('Output: ', this )
    // }
 let depth = 0;
 export default class DepthCalculator {
  calculateDepth(arr, layer = 1) {
    arr.map((c,i,arr) => c instanceof Array ? depth = this.calculateDepth(c, layer + 1) : depth)
    let res = depth = depth > layer ? depth : layer
    depth = 0;
    return res
  }
}
