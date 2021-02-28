/*
 * @lc app=leetcode.cn id=713 lang=javascript
 *
 * [713] 乘积小于K的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  if (k <= 1) return 0;
  let count = 0;
  let left = 0;
  let result = 1;
  for (let right = 0; right < nums.length; right++) {
    result *= nums[right];
    while (result >= k) result /= nums[left++];
    count += right - left + 1;
  }
  return count;
};
// @lc code=end
