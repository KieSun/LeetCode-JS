/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) return true
    return isSame(root.left, root.right)
};

const isSame = (l, r) => {
    if (l && r) {
        return l.val === r.val && isSame(l.left, r.right) && isSame(l.right, r.left)
    }
    return !l && !r
}