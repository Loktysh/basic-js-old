const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const { repeatTimes, separator = '+', addition = '', additionSeparator = '|', additionRepeatTimes } = options; frist = str;
  let res = '';
  let addend = '';
  let add = addition;
  for (let iter = 1; iter < additionRepeatTimes; iter++) {
    add += additionSeparator + addition; 
  } 
  for (let iter = 1; iter < repeatTimes; iter++) {
    addend += separator + str + add;
  }
 
  // console.log(add)
  res = (str + add) + addend;
  return res
};
  