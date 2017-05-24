function isSumOfConsecutive2(n) {
    var ways = 0
    for (var A = 1; A < n; A++) {
        var b = n
        for (var a = A; b > 0; b -= a, a++) {}
        if (b === 0) ways++
    }
    return ways
}
