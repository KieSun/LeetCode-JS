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
var postorderTraversal = function(root) {
    const [white, gray] = [0, 1]
    const res = []
    const stack = [[white, root]]
    while(stack.length) {
        const [color, node] = stack.pop()
        if (!node) continue
        if (color === white) {
            stack.push([gray, node])
            stack.push([white, node.right])
            stack.push([white, node.left])
        } else {
            res.push(node.val)
        }
    }
    return res
};