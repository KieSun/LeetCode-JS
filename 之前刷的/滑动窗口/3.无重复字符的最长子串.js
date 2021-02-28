/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = {}
    let left = 0
    let right = 0
    let count = 0
    while (right < s.length) {
        const char = s[right]
        const v = map[char] >= 0 ? map[char] : -1
        left = Math.max(left, v + 1)
        count = Math.max(count, right - left + 1)
        map[char] = right++
    }
    return count
};