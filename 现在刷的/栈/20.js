/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const arr = []
    let map = { '[': ']', '{': '}', '(': ')' }
    for(let i = 0; i < s.length; i++) {
        const v = s[i]
        if (v in map) {
            arr.push(map[v])
        } else if (arr.pop() !== v) {
            return false
        }
    }
    return !arr.length
};