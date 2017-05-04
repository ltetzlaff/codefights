function phoneCall(min1, min2_10, min11, s) {
    s-= min1
    if (s < 0) return 0
    
    var minutes = Math.floor(s / min2_10)
    if (minutes > 9) s-= 9 * min2_10
    else return minutes + 1

    return 10 + Math.floor(s / min11)
}
