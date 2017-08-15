function minesweeper(matrix) {
    var ext = [-1, 0, 1]
    var m = []
    for (var i = 0; i < matrix.length; i++) {
        m[i] = []
        for (var j = 0; j < matrix[0].length; j++) {
            m[i][j] = 0
            ext.forEach(x => {
              ext.forEach(y => {
                  if (x == 0 && y == 0) return
                  if (((i + x) < 0 || (i+x) >= matrix.length) || ((j + y) < 0 || (i+x) >= matrix[0].length)) return
                  if (matrix[i+x][j+y]) m[i][j]++
              })  
            })
        }
    } 
    return m
}
