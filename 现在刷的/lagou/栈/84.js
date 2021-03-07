/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let res = 0
    const stack = []
    // 边界，计算索引 0 和末尾
    heights = [0, ...heights, 0]
    for(let i = 0; i < heights.length; i++) {
        const v = heights[i]
        while (stack.length && v < height[stack[stack.length - 1]]) {
            const index = stack.pop()
            res = Math.max(res, heights[index] * (i - stack[stack.length - 1] - 1))
        }
    }
    return res
};