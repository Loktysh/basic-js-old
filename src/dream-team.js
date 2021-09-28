import { NotImplementedError } from '../extensions/index.js';

module.exports = function createDreamTeam(members) {
  // return members.filter(e => typeof e  === 'string').map(e => e.trim().slice(0,1).toUpperCase()).sort().join('') ;
  if (members === false && typeof members !== 'object') {return false};
  if (members === null || members == undefined ) {
      return false;
  }
  if ((Number(members)>0)) {
      return false;
  }
  if (members[0] === undefined) {
      return false
  }
  else {
    return members.filter(e => typeof e  === 'string').map(e => e.trim().slice(0,1).toUpperCase()).sort().join('')
  }
};
/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(/* members */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
