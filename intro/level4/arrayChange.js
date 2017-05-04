function arrayChange(arr) {
    var moves = 0
    var last = arr[0] - 1
    for (var i = 0, len = arr.length; i < len; i++) {
        if (arr[i] <= last) {
            var delta = (last - arr[i]) + 1
            moves += delta, 
            arr[i] += delta
        }
        last = arr[i]
    }
    return moves
}
