function allLongestStrings(arr) {
    var max = 0
    arr.forEach(s => {
        if (s.length > max) max = s.length
    })
    return arr.filter(s => s.length === max)
}
