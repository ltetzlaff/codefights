function candles(cand, makeNew) {
    var burnt = 0
    var left = 0
    while(cand > 0) {
        burnt += cand
        left  += cand
        cand   = Math.floor(left / makeNew)
        left  %= makeNew
    }
    return burnt
}
