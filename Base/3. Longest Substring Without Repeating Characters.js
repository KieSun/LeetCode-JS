// Given a string, find the length of the longest substring without repeating characters.

// Examples:

// Given "abcabcbb", the answer is "abc", which the length is 3.

// Given "bbbbb", the answer is "b", with the length of 1.

// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let l = 0
    let r = -1
    let result = 0
    let map = {}
    while (l < s.length) {

        if (r + 1 < s.length && !map[s[r + 1]]) {
            map[s[++r]] = 1
        } else {
            map[s[l++]] = 0
        }
        result = Math.max(result, r - l + 1)
    }
    return result
};