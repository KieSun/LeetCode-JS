/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let i = 0
    let length = nums.length
    while (i < length) {
        let j = nums[i] - 1
        if (nums[i] > 0 && nums[i] <= length && nums[j] !== nums[i]) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
        } else {
            i++
        }
    }
    for (let i = 0; i < length; i++) {
        if (nums[i] !== i + 1) {
            return i + 1
        }
    }
    return length + 1
};