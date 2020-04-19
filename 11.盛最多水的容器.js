/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// var maxArea = function(height) {
//     let max = 0
//     for (let i = 0; i < height.length - 1; i++) {
//         for (let j = i + 1; j < height.length; j++) {
//             const res = (j - i) * Math.min(height[i], height[j])
//             max = Math.max(res, max)
//         }
//     }
//     return max
// };

var maxArea = function(height) {
    let max = 0
    for (let i = 0, j = height.length - 1; i < j;) {
        const minHeight = height[i] < height[j] ? height[i++] : height[j--]
        max = Math.max(max, (j - i + 1) * minHeight)
    }
    return max
};
// @lc code=end

