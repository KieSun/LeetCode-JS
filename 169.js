/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // 摩尔投票法
    let num = nums[0]
    let count = 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === num) {
            count++
        } else if (--count === 0) {
            num = nums[i]
            count = 1
        }
    }
    return num
};