/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let map = {}
    for (let i = 0; i < numbers.length; i++) {
        const v = target - numbers[i]
        if (v in map) {
            return [map[v] + 1, i + 1]
        }
        map[numbers[i]] = i
    }
};