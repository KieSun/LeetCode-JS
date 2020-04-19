/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // 双指针，用 J 记录 0 的位置
    // 当当前索引的值不为 0 且双指针不相同时
    // 交换两个指针的值
    let j = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            if (i !== j) {
                nums[j] = nums[i]
                nums[i] = 0
            }
            j ++
        }
    }
};
// @lc code=end

