function replaceMiddle(a) {
    if (a.length % 2 !== 0) return a
    var m = Math.floor(a.length / 2) - 1
    var middle = a[m]+a[m+1]
    a.splice(m, 1)
    a[m] = middle
    return a
}
