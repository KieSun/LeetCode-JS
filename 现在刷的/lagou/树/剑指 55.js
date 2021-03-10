/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {
    const queue = [];
    let depth = 0
    if (root) {
        queue.push(root);
    }
    while (queue.length) {
        const a = [];
        const length = queue.length;
        for (let i = 0; i < length; i++) {
            const node = queue.shift();
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        depth++
    }
    return depth
};