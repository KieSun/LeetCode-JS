/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let i = 0
  let left = 0
  let right = nums.length - 1
  while (i <= right) {
      if (nums[i] === 0) {
          [nums[i++], nums[left++]] = [nums[left], nums[i]]
      } else if (nums[i] === 1) {
          i++
      } else if (nums[i] === 2) {
          [nums[i], nums[right--]] = [nums[right], nums[i]]
      }
  }
};