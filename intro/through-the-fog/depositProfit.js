function depositProfit(deposit, rate, threshold) {
    var y = 0
    while (deposit < threshold) {
        y++
        deposit *= (100 + rate)/100
    }
    return y
}
