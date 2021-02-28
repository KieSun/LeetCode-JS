/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = []
    const arr = []
    const dfs = () => {
        if (arr.length === nums.length) {
            result.push(arr.slice())
            return
        } 
        for (let i = 0; i < nums.length; i++) {
            if (!arr.includes(nums[i])) {
                arr.push(nums[i])
                dfs(arr)
                arr.pop(nums[i])
            }
        }
    }
    dfs()
    return result
};