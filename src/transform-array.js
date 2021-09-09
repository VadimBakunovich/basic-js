import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!');
  const diN = '--discard-next';
  const diP = '--discard-prev';
  const doN = '--double-next';
  const doP = '--double-prev';
  let res = [...arr];
  for (let i = 0; i < res.length;) {
    if ((res[i] === diP || res[i] === doP) && i === 0) res[i] = 0;
    else if ((res[i] === diN || res[i] === doN) && i === res.length - 1) res[i] = 0;
    else if (res[i] === diN && i < res.length - 1) {res[i] = 0; res[i + 1] = 0; i++;}
    else if (res[i] === diP && i > 0) {res[i - 1] = 0; res[i] = 0; i++}
    else if (res[i] === doN && i < res.length - 1) {
      res[i] = res[i + 1];
      i++;
    } else if (res[i] === doP && i > 0) {
        res[i] = res[i - 1];
        i++;
      }
    i++;
  }
  return res.filter(i => i !== 0);
}