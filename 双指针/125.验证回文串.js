/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (!s.length) return true
    let left = 0
    let right = s.length - 1
    while (left < right) {
        let v1 = s[left]
        let v2 = s[right]
        while (!isVaild(v1) && left !== right) {
            v1 = s[++left]
        }
        while (!isVaild(v2) && left !== right) {
            v2 = s[--right]
        }
        if (v1.toLowerCase() !== v2.toLowerCase()) return false
        left++
        right--
    }
    return true
};

const isVaild = (c) => {
    return /[a-zA-Z0-9]/.test(c)
}