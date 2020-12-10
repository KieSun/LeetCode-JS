var inorderTraversal = function(root) {
    // 白色标记未访问，灰色标记已访问
    const [white, gray] = [0, 1]
    const res = []
    // 模拟递归栈
    const stack = [[white, root]]
    while(stack.length) {
        const [color, node] = stack.pop()
        if (!node) continue
        if (color === white) {
            // 反向遍历顺序
            stack.push([white, node.right])
            stack.push([gray, node])
            stack.push([white, node.left])
        } else {
            res.push(node.val)
        }
    }
    return res
};