function makeArrayConsecutive2(statues) {
    var R = Math.max.apply(null, statues)
    var L = Math.min.apply(null, statues)
    return R - L + 1 - statues.length
}
