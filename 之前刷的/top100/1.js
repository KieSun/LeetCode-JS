var twoSum = function(nums, target) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (map.has(num)) {
            return [map.get(num), i]
        }
        map.set(target - num, i);
    }
};