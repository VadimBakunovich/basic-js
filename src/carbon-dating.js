import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
  export default function dateSample(n) {

    return typeof(n) === 'string' && typeof(+n) === 'number' && n <= 15 && n > 0 ?
      Math.ceil(Math.log(15 / n) * 5730 / Math.log(2)) : false;

  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}