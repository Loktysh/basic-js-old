const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
  }
  
  encrypt(message1, keyy) {
      if (arguments[0] === undefined || arguments[1] === undefined) throw new Error();
      const { toUpper } = require("lodash");
      function mod(n, m) {return ((n % m) + m) % m;}
      let message = toUpper(message1).split('');
      let key = toUpper(keyy);
      let key_max = '';
      let res = [];
      while (key_max.length < message.length) {
          key_max += key
      }
      for (let i = 0, i1 = 0; i < message.length; i++, i1++) {
          let el_m = message[i]; 
          let el_k = key_max[i1];
          if (el_m.charCodeAt(0) < 65  || el_m.charCodeAt(0) > 90) {
              res.push(el_m)
              i1--
          }
          else {
              let a = ((el_m.charCodeAt(0))); 
              let b = ((el_k.charCodeAt(0)));
              res.push(String.fromCharCode(mod(a+b, 26)+65))
          }
      }
      if (this.mode === true) return res.join('');
      return res.reverse().join('');
  }    
  decrypt(message1, keyy) {
    if (arguments[0] === undefined || arguments[1] === undefined) throw new Error();
    const { toUpper } = require("lodash");
    function mod(n, m) {return ((n % m) + m) % m;}
    let message = toUpper(message1).split('')
    let key = toUpper(keyy)
    let key_max = ''
    let res = []
    while (key_max.length < message.length) {
        key_max += key
    }
    for (let i = 0, i1 = 0; i < message.length; i++, i1++) {
        let el_m = message[i]; 
        let el_k = key_max[i1];
        if (el_m.charCodeAt(0) < 65  || el_m.charCodeAt(0) > 90) {
            res.push(el_m)
            i1--
        }
        else {
            let a = ((el_m.charCodeAt(0))); 
            let b = ((el_k.charCodeAt(0)));
            res.push(String.fromCharCode(mod(a+26-b, 26)+65))
        }
    }
    if (this.mode === true) return res.join('');
    return res.reverse().join('');
  } 
}

module.exports = VigenereCipheringMachine;