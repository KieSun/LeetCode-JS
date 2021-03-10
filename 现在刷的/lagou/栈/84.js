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
        // 找到比栈中短的木板
        // 然后将最后一块木板索引 pop 出来用于计算
        // 乘以当前索引 - 栈顶索引
        while (stack.length && v < height[stack[stack.length - 1]]) {
            const index = stack.pop()
            res = Math.max(res, heights[index] * (i - stack[stack.length - 1] - 1))
        }
        stack.push(i)
    }
    return res
};