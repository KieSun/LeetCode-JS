/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    return (BigInt(digits.join('')) + 1n).toString().split('').map(Number)
};
// @lc code=end

