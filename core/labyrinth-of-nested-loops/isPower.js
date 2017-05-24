function isPower(n) {
    if (n === 1) return true
    for (var a = 2; a <= 50; a++) {
        for (var b = 2; b <= 50; b++) {
            var m = Math.pow(a, b)
            if (m === n) return true
            if (m > n) break
        }
    }
    return false
}