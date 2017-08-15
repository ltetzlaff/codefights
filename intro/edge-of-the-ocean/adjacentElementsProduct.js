function adjacentElementsProduct(arr) {
    var max = -Infinity
    var prod = 0
    for (var i = 0, len = arr.length - 1; i < len; i++) {
        prod = arr[i] * arr[i+1]
        if (prod > max) max = prod
    }
    return max
}
