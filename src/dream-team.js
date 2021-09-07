import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(m) {
  return Array.isArray(m) ? m.filter(i => typeof i === 'string').map(i => i.trim().toUpperCase()).sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).reduce((s, i) => s + i[0], '') : false;
}
