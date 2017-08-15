var a = "a".charCodeAt(0)

function commonCharacterCount(s1, s2) {
    var h1 = getHisto(s1)
    var h2 = getHisto(s2)
    
    var mutual = 0
    for (var i = 0, len = h1.length; i < len; i++) {
        mutual += Math.min(h1[i] || 0, h2[i] || 0)
    }
    return mutual
}

function getHisto(s) {
    var histo = []
    s.split("").forEach(c => {
        var code = c.charCodeAt(0) - a
        histo[code] = histo[code] || 0
        histo[code]++
    })
    return histo;
}