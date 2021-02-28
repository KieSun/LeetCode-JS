/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = []
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) break
        if (i > 0 && nums[i] === nums[i - 1]) continue
        let L = i + 1
        let R = nums.length - 1
        while (L < R) {
            let sum = nums[i] + nums[L] + nums[R]
            if (sum === 0) {
                res.push([nums[i], nums[L], nums[R]])
                while (nums[L] === nums[L + 1]) L++
                while (nums[R] === nums[R + 1]) R--
                L++
                R--
            } else if (sum > 0) {
                R--
            } else {
                L++
            }
        }
    }
    return res
};
// @lc code=end

