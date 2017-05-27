function comfortableNumbers(l, r) {
    const s = x => (x + "").split("").map(parseFloat).reduce((a, v) => a + v)
    var n = 0
    for (var a = l; a < r; a++) {
        for (var b = a + 1; b <= r; b++) {
            var sa = s(a)
            var sb = s(b)
            if (a !== b 
              && b >= a - sa && b <= a + sa 
              && a >= b - sb && a <= b + sb) {
                n++
            }
        }
    }
    return n
}
