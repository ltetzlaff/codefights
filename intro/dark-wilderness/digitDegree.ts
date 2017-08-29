function digitDegree(n: number): number {
    let i = 0
    while (n > 9) {
        n = (n + "")
            .split("")
            .map(parseFloat)
            .reduce((a, v) => a += v)
        i++
    }
    return i
}
