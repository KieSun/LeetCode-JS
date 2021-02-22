/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let n = s.length, start = 0, maxLen = 0
    const d = []
    for (let i = 0; i < n; i++){
        d[i] = []
    }
    for (let i = n - 1; i >= 0; i--) {
        for (let j = i; j < n; j++) {
            if (i === j) d[i][j] = true
            else if (i + 1 == j) d[i][j] = s.charAt(i) === s.charAt(j)
            else d[i][j] = s.charAt(i) === s.charAt(j) && d[i + 1][j - 1]

            if (d[i][j] && (j - i + 1) > maxLen) {
                maxLen = j - i + 1
                start = i
            }
        }
    }
    return s.substring(start, start + maxLen)
};