function isHappy(n: number): boolean {
    let p = n, q = n
    do {
        p = getNext(p)
        q = getNext(getNext(q))
    } while(q !== p && p !== 1)
    return p === 1
};

function getNext(n: number) {
    let z = 0
    while(n) {
        z += (n % 10) * (n % 10)
        n = Math.floor(n / 10)
    }
    return z
}