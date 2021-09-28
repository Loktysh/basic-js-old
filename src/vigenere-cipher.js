/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
export default class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
  }
  encrypt(message1, keyy) {
    if (arguments[0] === undefined || arguments[1] === undefined)
      throw new Error('Incorrect arguments!');
    function mod(n, m) {
      return ((n % m) + m) % m;
    }
    let message = message1.toUpperCase().split("");
    let key = keyy.toUpperCase();
    let key_max = "";
    let res = [];
    while (key_max.length < message.length) {
      key_max += key;
    }
    for (let i = 0, i1 = 0; i < message.length; i++, i1++) {
      let el_m = message[i];
      let el_k = key_max[i1];
      if (el_m.charCodeAt(0) < 65 || el_m.charCodeAt(0) > 90) {
        res.push(el_m);
        i1--;
      } else {
        let a = el_m.charCodeAt(0);
        let b = el_k.charCodeAt(0);
        res.push(String.fromCharCode(mod(a + b, 26) + 65));
      }
    }
    if (this.mode === true) return res.join("");
    return res.reverse().join("");
  }
  decrypt(message1, keyy) {
    if (arguments[0] === undefined || arguments[1] === undefined)
      throw new Error('Incorrect arguments!');
    function mod(n, m) {
      return ((n % m) + m) % m;
    }
    let message = message1.toUpperCase().split("");
    let key = keyy.toUpperCase();
    let key_max = "";
    let res = [];
    while (key_max.length < message.length) {
      key_max += key;
    }
    for (let i = 0, i1 = 0; i < message.length; i++, i1++) {
      let el_m = message[i];
      let el_k = key_max[i1];
      if (el_m.charCodeAt(0) < 65 || el_m.charCodeAt(0) > 90) {
        res.push(el_m);
        i1--;
      } else {
        let a = el_m.charCodeAt(0);
        let b = el_k.charCodeAt(0);
        res.push(String.fromCharCode(mod(a + 26 - b, 26) + 65));
      }
    }
    if (this.mode === true) return res.join("");
    return res.reverse().join("");
  }
}