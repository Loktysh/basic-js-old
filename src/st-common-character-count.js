import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1,s2) {
  let res = 0
  let resStr = s2.split('')
  s1.split('').forEach(c => {
    if (resStr.includes(c)) {
      resStr.splice(resStr.indexOf(c),1)
      res = res+1;
    } 
    return false;
  });
  return res;
}
