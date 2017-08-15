function boxBlur(im) {
    var m = []
    for (var x = 1; x < im.length - 1; x++) {
        m[x-1] = []
        for (var y = 1; y < im[x].length - 1; y++) {
            m[x-1][y-1] = Math.floor((im[x-1][y-1] + im[x][y-1] + im[x+1][y-1] +
                        im[x-1][y] + im[x][y] + im[x+1][y] +
                       im[x-1][y+1] + im[x][y+1] + im[x+1][y+1])/9)
        }
    }
    console.log(m)
    return m
}
