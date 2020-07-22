/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  let length = A.length;
  let result = Array(length).fill(0);
  let left = 0;
  let right = (index = length - 1);
  while (left <= right) {
    const v1 = A[left] * A[left];
    const v2 = A[right] * A[right];
    if (v1 > v2) {
      result[index] = v1;
      left++;
    } else {
      result[index] = v2;
      right--;
    }
    index--;
  }
  return result;
};
