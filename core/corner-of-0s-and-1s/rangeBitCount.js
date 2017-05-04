function rangeBitCount(a, b) {
    var ones = 0
    for (var i = a; i <= b; i++) {
        ones += i.toString(2).split("1").length - 1
    }
    return ones
}
