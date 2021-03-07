/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    let stack = []
    const res = []
    for (let i = 0; i < T.length; i++) {
        const v = T[i]
        while (stack.length && v > T[stack[stack.length - 1]]) {
            const index = stack.pop()
            res[index] = i - index
        }
        stack.push(i)
    }
    while (stack.length) {
        res[stack.pop()] = 0
    }
    return res
};