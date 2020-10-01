/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  let i = 0;
  while (i < nums.length) {
    let j = nums[i] - 1;
    if (nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i++;
    }
  }
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      result.push(nums[i]);
    }
  }
  return result;
};
