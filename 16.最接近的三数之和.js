/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let result = nums[0] + nums[1] + nums[2];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (Math.abs(target - sum) < Math.abs(target - result)) {
        result = sum;
      } else if (sum > target) {
        right--;
      } else if (sum < target) {
        left++;
      } else {
        return target;
      }
    }
    return result;
  }
};
// @lc code=end
