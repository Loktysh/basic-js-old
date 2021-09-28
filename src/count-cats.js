import { NotImplementedError } from '../extensions/index.js';

module.exports = function countCats(matrix) {
  // return matrix.flat().filter((e) => e === '^^').length;
  let res = 0
  for (let item in matrix) {
      matrix[item].map( c => c === '^^' ? res++ : res)
  };
  return res
};
/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(/* matrix */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
