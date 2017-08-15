function arrayMaximalAdjacentDifference(a) {
    var max = -Number.MAX_VALUE
    for (var i = 0, len = a.length - 1; i < len; i++) {
        var x = Math.abs(a[i] - a[i+1])
        if (x > max) max = x
    }
    return max
}
