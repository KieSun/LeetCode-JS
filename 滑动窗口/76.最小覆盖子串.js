/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let length = Infinity
    let left = 0, right = 0
    let map = {}
    let match = 0
    let start = 0
    for (let i = 0; i < t.length; i++) {
        const char = t[i]
        if (!(char in map)) {
            map[char] = 0
        }
        map[char] += 1
    }
    while (right < s.length) {
        const char = s[right]
        if (char in map) {
            map[char] -= 1
            if (map[char] >= 0) match += 1
        }
        while (match === t.length) {
            if (length > right - left + 1) {
                length = right - left + 1
                start = left
            }
            const char = s[left++]
            if (char in map) {
                if (map[char] === 0) match -= 1
                map[char] += 1
            }
        }
        right++
    }
    return length === Infinity ? '' : s.substring(start, start + length)
};