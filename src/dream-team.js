const CustomError = require("../extensions/custom-error");

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
