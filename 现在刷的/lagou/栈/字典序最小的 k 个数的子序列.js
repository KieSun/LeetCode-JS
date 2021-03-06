const findSmallSeq = (arr, k) => {
    let stack = []
    for (let i = 0; i < arr.length; i++) {
        const v = arr[i]
        const length = stack.length
        const left = arr.length - i
        while (length && (length + left > k) && stack[length - 1] > v) {
            stack.pop()
        }
        stack.push(v)
    }
    while (stack.length > k) {
        stack.pop()
    }
    return stack
}