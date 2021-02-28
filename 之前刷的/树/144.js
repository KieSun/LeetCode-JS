/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let [white, gray] = [0, 1]
    let res = []
    let stack = [[white, root]]
    while (stack.length) {
        const [color, node] = stack.pop()
        if (!node) continue
        if (color === white) {
            stack.push([white, node.right])
            stack.push([white, node.left])
            stack.push([gray, node])
        } else {
            res.push(node.val)
        }
    }
    return res
};