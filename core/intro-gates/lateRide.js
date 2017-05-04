function lateRide(n) {
    var h = Math.floor(n / 60)
    var m = n - h * 60
    return (h + "" + m).split("").map(n => Number.parseInt(n)).reduce((a, v) => a + v)
}
