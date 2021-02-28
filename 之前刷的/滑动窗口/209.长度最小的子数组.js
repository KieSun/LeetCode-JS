/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    let left = 0
    let right = 0
    let length = Infinity
    let sum = 0
    while (right < nums.length) {
        sum += nums[right]
        while (sum >= s) {
            length = Math.min(length, right - left + 1)
            sum -= nums[left++]
        }
        right++
    }
    return length === Infinity ? 0 : length
};