/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) continue;
    let fast, slow;
    fast = slow = i;
    const isForward = nums[i] >= 0;
    while (1) {
      slow = getIndex(nums, isForward, slow);
      fast = getIndex(nums, isForward, fast);
      if (fast !== -1) {
        fast = getIndex(nums, isForward, fast);
      }
      if (slow === -1 || fast === -1 || slow === fast) {
        break;
      }
    }
    if (slow !== -1 && slow === fast) {
      return true;
    }
    slow = i;
    let sgn = nums[i];
    while (sgn * nums[slow] > 0) {
      let tmp = getCurrentIndex(nums, slow);
      nums[slow] = 0;
      slow = tmp;
    }
  }
  return false;
};

const getCurrentIndex = (nums, index) => {
  let next = (index + nums[index]) % nums.length;
  if (next < 0) {
    next += nums.length;
  }
  return next;
};

const getIndex = (nums, isForward, index) => {
  let direction = nums[index] >= 0;
  if (direction !== isForward) return -1;
  let next = getCurrentIndex(nums, index);
  if (index === next) return -1;
  return next;
};
