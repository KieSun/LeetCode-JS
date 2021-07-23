/**
 * @param {number} k
 * @return {number}
 */
 var getKthMagicNumber = function(k) {
    this.data = [1]
    let p3 = 0
    let p5 = 0
    let p7 = 0
    for(let i = 1; i < k; i++) {
        this.data[i] = Math.min(this.data[p3] * 3, Math.min(this.data[p5] * 5, this.data[p7] * 7))
        if (this.data[i] === this.data[p3] * 3) p3++
        if (this.data[i] === this.data[p5] * 5) p5++
        if (this.data[i] === this.data[p7] * 7) p7++
    }
    return this.data[k - 1]
};