/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let arr = new Array(n)
    arr[0] = 1
    arr[1] = 1
    for (let i = 2; i<= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr[n]
};
// @lc code=end

