/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let res 
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length;j ++) {
            const remain = target - nums[i]
            if (remain === nums[j]) {
                res = [i, j]
                break
            }
        }
    }
    return res
};
// @lc code=end

