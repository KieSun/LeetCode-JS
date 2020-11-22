/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    if (!s || !s.length) return 0
    let count = 0
    for (let i = 0; i < s.length; i++) {
        count += expand(s, i, i)
        count += expand(s, i, i + 1)
    }
    return count
};

const expand = (s, l, r) => {
    let count = 0
    while (l >= 0 && r < s.length && s[l] === s[r]) {
        count++
        l--
        r++
    }
    return count
}