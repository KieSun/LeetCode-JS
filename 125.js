/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (!s || s.length === 0) return true
    let i = 0
    let j = s.length  - 1
    const isVaild = char => {
        return /[a-zA-Z]/.test(char) || /[0-9]/.test(char)
    }
    for (; i < j; i++, j--) {
        while(i < j && !isVaild(s[i])) i++
        while(i < j && !isVaild(s[j])) j--
        if (s[i].toLowerCase() !== s[j].toLowerCase()) return false
    }
    return true
};