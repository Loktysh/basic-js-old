const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!(arr instanceof Array)) {
        throw new Error ('FAIL')
    }
    res1 =  (arr.map(function(e, i, array) {
            if (e === '--double-next') {
                return array[i+1];
            }
            else if (e === '--double-prev') {
                if (array[i-2] !== '--discard-next') {
                    return array[i-1];
                }
                else return 'DEL'
            }
            else if (e === '--discard-next') {
                return 'DEL';
            }
            else if (e === '--discard-prev') {
                return 'DEL';
            }
            else if (array[i+1] === '--discard-prev') {
                return 'DEL'
            }
            else if (array[i-1] === '--discard-next') {
                return 'DEL'
            }
            else return e
    }))
    res = res1.filter(e => e !== 'DEL').filter(e=> e !== undefined)
    return res
};
