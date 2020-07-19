/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  if (words.length === 0 || words[0].length === 0) {
    return [];
  }
  const map = {};
  const result = [];
  const wordCount = words.length;
  const wordLength = words[0].length;
  words.forEach((item) => {
    if (!map[item]) {
      map[item] = 0;
    }
    map[item] += 1;
  });
  for (let i = 0; i < s.length - wordCount * wordLength + 1; i++) {
    const exit = {};
    for (let j = 0; j < wordCount; j++) {
      const nextIndex = i + j * wordLength;
      const word = s.substring(nextIndex, nextIndex + wordLength);
      if (!(word in map)) {
        break;
      }
      if (!exit[word]) {
        exit[word] = 0;
      }
      exit[word] += 1;
      if (exit[word] > (map[word] || 0)) {
        break;
      }
      if (j + 1 === wordCount) {
        result.push(i);
      }
    }
  }
  return result;
};
// @lc code=end
