import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(s, o) {
  s += '';
  let rpt = (o && o.repeatTimes) ? o.repeatTimes : 1;
  const sep = (o && o.separator) ? o.separator : '+';
  let add = (o && o.addition) ? o.addition : '';
  o.addition === false ? add = 'false' : add;
  o.addition === null ? add = 'null' : add;
  o.addition === 0 ? add = '0' : add;
  let addRpt = (o && o.additionRepeatTimes) ? o.additionRepeatTimes : 1;
  const addSep = (o && o.additionSeparator) ? o.additionSeparator : '|';
  s = (addRpt === 1) ? s + add : s;
  while (addRpt > 1) {
    s += add + addSep;
    addRpt--;
    addRpt === 1 ? s += add : s;
  }
  let res = s;
  while (rpt > 1) {
    res += sep + s;
    rpt--;
  }
  return res;
}
