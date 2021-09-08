import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let enc = [];
  while (str.length > 1) {
    let count = 1;
    let word = str[0];
    while (str.length > 1) {
      if (str[0] === str[1]) {
        count++;
        str = str.replace(str[0], '');
      } else {
          str.length === 1 ? str : str = str.replace(str[0], '');
          break;
        }
    }
    count === 1 ? count = '' : count;
    enc.push(count + word);
    if (str.length === 1 & word !== str[0]) enc.push(str[0]);
  }
  return enc.join('');
}