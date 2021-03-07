var trap = function(height) {
    let max = 0;
    let volumn = 0;
    const leftMax = [];
    const rightMax = [];

    for (let i = 0; i < height.length; i++) {
        max = Math.max(max, height[i])
        leftMax[i] = max
    }

    max = 0

    for (let i = height.length - 1; i >= 0; i--) {
        max = Math.max(max, height[i])
        rightMax[i] = max
    }

    for (let i = 0; i < height.length; i++) {
        volumn += Math.min(leftMax[i], rightMax[i]) - height[i]
    }

    return volumn;
};
