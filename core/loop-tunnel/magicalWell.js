function magicalWell(a, b, n) {
    var ret = 0
    for (var i = 0; i < n; i++) {
        ret += a * b
        a++
        b++
    }
    return ret
}
