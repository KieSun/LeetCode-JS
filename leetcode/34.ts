function searchRange(nums: number[], target: number): number[] {
    let l = 0, r = nums.length - 1
    while(l < r) {
        let mid = l + r >> 1
        if (nums[mid] >= target) {
            r = mid
        } else {
            l = mid + 1
        }
    }
    if (target !== nums[l]) return [-1, -1]
    let left = l
    l = 0, r = nums.length - 1
    while(l < r) {
        let mid = l + r + 1 >> 1
        if (nums[mid] <= target) {
            l = mid
        } else {
            r = mid - 1
        }
    }
    return [left, l]
};