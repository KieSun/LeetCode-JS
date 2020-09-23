/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length < 2) return intervals;
  intervals.sort((a, b) => a[0] - b[0]);
  let start = intervals[0][0];
  let end = intervals[0][1];
  let result = [];
  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];
    if (end >= interval[0]) {
      end = Math.max(end, interval[1]);
    } else {
      result.push([start, end]);
      end = interval[1];
      start = interval[0];
    }
  }
  result.push([start, end]);
  return result;
};
