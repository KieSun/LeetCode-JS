var majorityElement = function(nums) {
    let num = nums[0]
    let count = 0
    for (let i = 1; i < nums.length; i++) {
        if (num === nums[i]) {
            count++
        } else if (--count === 0) {
            count = 1
            num = nums[i]
        }
    }
    return num
};