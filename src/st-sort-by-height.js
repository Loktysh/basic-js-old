import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
    // let indexSkip = [];
    // let res = []
    // n.forEach((e,i)=> e===-1 ? indexSkip.push(i) : false)
    // let arr = n.filter(e => e !== -1).sort()
    // if (indexSkip.length === 0) {
    //   return n.sort((a,b) => a === b ? false : a-b)
    // }
    // for (let i=0; i<n.length;i++) {
    //     res.push(indexSkip.includes(i) ? -1 : 0);
    // }
    // res = res.map((e)=>{
    //     if (e===0) { 
    //         return arr.shift();
    //     }
    //     return -1
    // })
    // return res
    let aT = [];
  let newArr = arr.map((item) => {
    if (item !== -1) {
      aT.push(item);
      return 0;
    }
    return item;
  });
  aT.sort((a, b) => a - b);
  return newArr.map((item) => {
    if (!item) {
      return aT.shift();
    }
    return item;
  });
}
