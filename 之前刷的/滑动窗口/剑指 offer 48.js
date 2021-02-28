/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length < 2) return s.length
  let left = 0, right = 0
  let map = {}
  let length = 0
  while (right < s.length) {
      const char = s[right]
      if (char in map) {
          left = Math.max(left, map[char])
      }
      map[char] = right + 1
      length = Math.max(length, right - left + 1)
      right++
  }
  return length
};