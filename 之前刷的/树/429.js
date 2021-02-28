/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return []
    let res = []
    let stack = [root]
    while (stack.length) {
        let length = stack.length
        let data = []
        for (let i = 0; i < length; i++) {
            const node = stack.shift()
            if (!node) continue
            data.push(node.val)
            for (let j = 0; j < node.children.length; j++) {
                stack.push(node.children[j])
            }
        }
        res.push(data)
    }
    return res
}
