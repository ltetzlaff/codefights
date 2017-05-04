function countSumOfTwoRepresentations2(n, l, r) {
    var ret = n / 2 - Math.max(l, n-r) + 1
    if (ret < 0) return 0
    return Math.floor(ret)
}
