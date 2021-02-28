/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    if (!s.length || !p.length || s.length < p.length) return []
    const map = {}
    const result = []
    let left = 0, right = 0
    for (let i = 0; i < p.length; i++) {
        const char = p[i]
        if (!(char in map)) {
            map[char] = 0
        }
        map[char] += 1
    }
    while (right < s.length) {
        const char = s[right]
        if (map[char] > 0) {
            map[char] -= 1
            right++
        } else if (map[s[left]] >= 0) {
            map[s[left]] += 1
            left++
        } else {
            left = right += 1
        }
        if (right - left === p.length) {
            result.push(left)
        }
    }
    return result
};