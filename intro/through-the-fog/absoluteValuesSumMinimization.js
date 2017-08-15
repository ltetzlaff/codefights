function absoluteValuesSumMinimization(a) {
    var min = Infinity
    var ret
    a.forEach(x => {
        var sum = 0
        a.forEach(y => sum += Math.abs(x - y))
        if (sum < min) {
            min = sum
            ret = x
        }
    })
    return ret
}
