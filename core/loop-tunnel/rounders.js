function rounders(value) {
    const round = (x, n) => Math.round(x / n) * n
    const len = (value + "").length
    var n = 1
    for (var i = 0; i < len; i++) {
        value = round(value, n)
        n *= 10

    }
    return value
}
