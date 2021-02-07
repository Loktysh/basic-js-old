const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // return members.filter(e => typeof e  === 'string').map(e => e.trim().slice(0,1).toUpperCase()).sort().join('') ;
  if (members === null || (typeof members) !== 'object') {
    return false;
  }
  return members.filter(e => typeof e  === 'string').map(e => e.trim().slice(0,1).toUpperCase()).sort().join('')
};
