import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (m, res = []) {
  for (let i = 0; i < m.length; i++) {
    let arr = [];
    for (let j = 0; j < m[i].length; j++) {
      let count = 0;
      if (i > 0) m[i-1][j] ? count++ : count; // up
      if (i > 0 && j < m[i].length - 1) m[i-1][j+1] ? count++ : count; // up-right
      if (j < m[i].length - 1) m[i][j+1] ? count++ : count; // right
      if (i < m.length - 1 && j < m[i].length - 1) m[i+1][j+1] ? count++ : count; // down-right
      if (i < m.length - 1) m[i+1][j] ? count++ : count; // down
      if (i < m.length - 1 && j > 0) m[i+1][j-1] ? count++ : count; // down-left
      if (j > 0) m[i][j-1] ? count++ : count; // left
      if (i > 0 && j > 0) m[i-1][j-1] ? count++ : count; // up-left
      arr.push(count);
    }
    res.push(arr);
  }
  return res;
}