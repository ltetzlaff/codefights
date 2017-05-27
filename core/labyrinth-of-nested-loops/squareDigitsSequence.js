function squareDigitsSequence(a0) {
    const a = []
    var an = a0
    do {
        a.push(an)
        an = (an + "").split("").map(parseFloat).reduce((a, d) => a + d*d, 0)
    } while (!a.includes(an))
    return a.length + 1
}
