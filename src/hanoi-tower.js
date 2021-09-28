import { NotImplementedError } from '../extensions/index.js';

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let res = Math.pow(2, disksNumber) - 1;
  return {turns: res, seconds:  Math.floor(res / (turnsSpeed / 3600))}
};
/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
export default function calculateHanoi(/* disksNumber, turnsSpeed */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
