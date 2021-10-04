import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let s = n+''
  let results = []
  s.split('').forEach((c,i)=> {
    let e = s.substring(0, i) + s.substring(i + 1, s.length)
    results.push(e)
  }
  )
  let res = results.sort((a, b) => b - a)[0]
  return parseInt(res)
}
