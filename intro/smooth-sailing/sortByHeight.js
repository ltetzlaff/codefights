function sortByHeight(a) {
    var ppl = a.filter(p => p !== -1).sort((a, b) => a-b)
    for (var i = 0, len = a.length; i < len; i++) {
        if (a[i] !== -1) {
            a[i] = ppl.shift()
        }
    }
    return a
}
