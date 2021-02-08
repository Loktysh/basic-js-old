const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  const seasons =  { 
    11: 'winter',
    0: 'winter',
    1: 'winter',
    2: 'spring',
    3: 'spring',
    4: 'spring', 
    5: 'summer',
    6: 'summer', 
    7: 'summer', 
    8: 'autumn',
    9: 'autumn',
    10: 'autumn',
  }
  if (date === null) {
    throw new Error ('FAIL')
  }
  else if (date === undefined){
    return 'Unable to determine the time of year!'
  }
  return seasons[date.getUTCMonth()]
};
