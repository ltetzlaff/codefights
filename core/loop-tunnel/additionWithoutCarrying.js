function additionWithoutCarrying(a, b) {
    const split = n => n.toString().split("").map(v => parseInt(v))
    const A = split(a).reverse()
    const B = split(b).reverse()
    const max = Math.max(A.length, B.length)
    
    const R = []
    for (var i = 0; i < max; i++) {
        R.push(((A[i]||0) + (B[i]||0)) % 10)
    }
    return parseInt(R.reverse().join(""))
}
