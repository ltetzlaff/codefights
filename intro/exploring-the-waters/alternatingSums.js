function alternatingSums(a) {
    var g1 = [], g2 = []
    var toggle = true
    for (var i = 0, len = a.length; i < len; i++) {
        toggle ? g1.push(a[i]) : g2.push(a[i])
        toggle ^= true
    }
    
    return [
        g1.reduce((a, v) => a + v, 0),
        g2.reduce((a, v) => a + v, 0)
    ]
}
