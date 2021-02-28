/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let length = nums.length
    if (length === 1) return
    k %= length
    myRotate(0, length - 1)
    myRotate(0, k - 1)
    myRotate(k, length - 1)
    
    function myRotate(start, end) {
        while(start < end) {
            let tmp = nums[start]
            nums[start++] = nums[end]
            nums[end--] = tmp
        }
    }
};
// @lc code=end

