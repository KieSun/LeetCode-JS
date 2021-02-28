/*
 * @lc app=leetcode.cn id=581 lang=javascript
 *
 * [581] 最短无序连续子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  let length = nums.length;
  if (length <= 1) return 0;
  let high = 0,
    low = length - 1,
    max = -Infinity,
    min = Infinity;
  for (let i = 0; i < length; i++) {
    if (nums[i] >= max) {
      max = nums[i];
    } else {
      high = i;
    }
    if (nums[length - i - 1] <= min) {
      min = nums[length - i - 1];
    } else {
      low = length - i - 1;
    }
  }
  return high > low ? high - low + 1 : 0;
};
// @lc code=end
