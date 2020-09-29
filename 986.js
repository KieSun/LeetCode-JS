/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function (A, B) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < A.length && j < B.length) {
    let a = A[i];
    let b = B[j];
    // 寻找交集
    let start = Math.max(a[0], b[0]);
    let end = Math.min(a[1], b[1]);
    if (start <= end) {
      result.push([start, end]);
    }
    // 因为两数组都是排好序的，哪个 end 值小就挪动哪个向后
    if (a[1] < b[1]) {
      i++;
    } else {
      j++;
    }
  }
  return result;
};
