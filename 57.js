/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let result = [];
  let i = 0;
  // 不重叠，start > end
  while (i < intervals.length && newInterval[0] > intervals[i][1]) {
    result.push(intervals[i++]);
  }
  // 重叠，end < start
  while (i < intervals.length && newInterval[1] >= intervals[i][0]) {
    // 修改区间
    newInterval = [
      Math.min(intervals[i][0], newInterval[0]),
      Math.max(intervals[i][1], newInterval[1]),
    ];
    i++;
  }
  result.push(newInterval);
  // push 剩余不重叠的
  while (i < intervals.length) {
    result.push(intervals[i++]);
  }
  return result;
};
