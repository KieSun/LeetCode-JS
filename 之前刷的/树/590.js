/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    const [white, gray] = [0, 1]
    const res = []
    const stack = [[white, root]]
    while (stack.length) {
        const [color, node] = stack.pop()
        if (!node) continue
        if (color === white) {
            const length = node.children.length
            stack.push([gray, node])
            for (let i = length - 1; i >= 0; i--) {
                stack.push([white, node.children[i]])
            }
        } else {
            res.push(node.val)
        }
    }
    return res
};