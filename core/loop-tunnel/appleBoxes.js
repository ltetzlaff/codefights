function appleBoxes(k) {
    var red = 0
    var yellow = 0
    while (k >= 0) {
        k % 2 === 0 ? (red += k*k) : (yellow += k*k)
        k--
    }
    return red - yellow
}
