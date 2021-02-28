/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// 用 JS 写会超时
var myPow = function(x, n) {
    let N = Math.abs(n)
    let result = 1
    while (N !== 0) {
        if ((N & 1) === 1) result *= x
        x *= x
        N >>= 1
    }
    return n < 0 ? 1 / result : result
};