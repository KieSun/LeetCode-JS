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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const queue = [];
  const res = [];
  if (root) {
    queue.push(root);
  }
  while (queue.length) {
    const a = [];
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      a.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    res.push(a);
  }
  return res;
};
