/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(nums, k) {
    if (nums[0] > k) return k
    let i = 0
    let value = 1
    while (i < nums.length && k > 0) {
        if (nums[i] !== value) {
            k--
        } else {
            i++
        }
        value++
    }
    if (k > 0) {
        return value + k - 1
    }
    return value - 1
};