function avoidObstacles(a) {
    for (var j = 1; j <= 100; j++) {
        var fits = a.every(n => n % j !== 0)
        if (fits) return j
    }
}
