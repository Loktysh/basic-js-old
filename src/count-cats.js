const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  // return matrix.flat().filter((e) => e === '^^').length;
  let res = 0
  for (let item in matrix) {
      matrix[item].map( c => c === '^^' ? res++ : res)
  };
  return res
};
