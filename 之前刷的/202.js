/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let slow, fast;
  slow = fast = n;
  do {
    slow = sum(slow);
    fast = sum(sum(fast));
  } while (fast !== slow);
  return slow === 1;
};

const sum = (num) => {
  let sum = 0;
  while (num > 0) {
    let n = num % 10;
    sum += n * n;
    num = Math.floor(num / 10);
  }
  return sum;
};
