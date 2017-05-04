function firstReverseTry(arr) {
    if (!arr.length) return arr
    var tmp = arr[0]
    arr[0] = arr[arr.length - 1]
    arr[arr.length - 1] = tmp
    return arr
}
