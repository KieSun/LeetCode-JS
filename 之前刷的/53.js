/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = -Infinity
    let current = 0
    for (let i = 0; i < nums.length; i++) {
        current = current <= 0 ? nums[i] : (current + nums[i])
        max = Math.max(max, current)
    }
    return max
};