const findRightSmall = (arr) => {
    const stack = []
    const result = []
    for (let i = 0; i < arr.length; i++) {
        const v = arr[i]
        if (stack.length > 0 && arr[stack[stack.length - 1]] > v) {
            result[stack[stack.length - 1]] = i
            stack.pop()
        }
        stack.push(i)
    }
    while (stack.length) {
        result[stack.length - 1] = -1
        stack.pop()
    }
    return result 
}