function leastFactorial(n) {
    var k = 1, i = 0
    while (k < n) {
        i++
        k *= i
    }
    return k
}
