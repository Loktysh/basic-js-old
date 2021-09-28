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
export default function repeater(str, options) {
  const {
    repeatTimes,
    separator = "+",
    addition = "",
    additionSeparator = "|",
    additionRepeatTimes,
  } = options;
  let res = "";
  let addend = "";
  let add = addition;
  for (let iter = 1; iter < additionRepeatTimes; iter++) {
    add += additionSeparator + addition;
  }
  for (let iter = 1; iter < repeatTimes; iter++) {
    addend += separator + str + add;
  }
  res = str + add + addend;
  return res;
}
