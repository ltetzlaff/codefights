function matrixElementsSum(m) {
    var works = 0
    var blacklist = []
    for (var y = 0, rows = m.length; y < rows; y++) {
        for (var x = 0, cols = m[y].length; x < cols; x++) {
            var cell = m[y][x]
            if (y == 0 || !blacklist.includes(x)) {
                if (cell != 0) works += cell
                else blacklist.push(x)
            }   
        }
    }
    return works
}