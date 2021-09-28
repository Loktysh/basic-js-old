import { NotImplementedError } from '../extensions/index.js';

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
  
/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(/* str, options */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
