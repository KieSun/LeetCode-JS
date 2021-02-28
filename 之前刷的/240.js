/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (!matrix.length || !matrix[0].length) return false
    let m = matrix.length
    let n = matrix[0].length
    let i = 0
    let j = n - 1
    while (i < m && j >= 0) {
        if (target === matrix[i][j]) {
            return true
        } else if (target > matrix[i][j]) {
            i++
        } else {
            j--
        }
    }
    return false
};