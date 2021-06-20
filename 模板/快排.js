const quickSort = (nums, l , r) => {
    if (l >= r) return
    let i = l - 1
    let j = r + 1
    let x = nums[l + r >> 1]
    while (i < j) {
        while (nums[++i] < x) {}
        while (nums[--j] > x) {}
        if (i < j) [nums[i], nums[j]] = [nums[j], nums[i]]
    }
    quickSort(nums, l, j)
    quickSort(nums, j + 1, r)
}