function isSmooth(a) {
    var m = Math.floor(a.length / 2)
    var middle = a.length % 2 === 0 ? a[m-1]+a[m] : a[m]
    return a[0] === middle && middle === a[a.length - 1]
}
