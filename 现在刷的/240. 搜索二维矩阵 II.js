/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let n = matrix.length
    let m = matrix[0].length
    let i = 0;
    let j = m - 1;
    while (i < n && j >= 0) {
        const num = matrix[i][j]
        if (target === num) {
            return true
        } else if (target > num) {
            i++
        } else {
            j--
        }
    }
    return false
};