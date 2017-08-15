function palindromeRearranging(s) {
    var histo = {}
    s.split("").forEach(c => {
        var code = c.charCodeAt(0)
        histo[code] = histo[code] || 0
        histo[code]++
    })
    var odds = 0
    for (var c in histo) {
       if (histo[c] % 2 !== 0) odds++
    }
    return s.length % 2 === 0 ? odds == 0 : odds == 1
}
