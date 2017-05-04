function isInfiniteProcess(a, b) {
    return (b - a >= 1 && (b - a) % 2 !== 0) || a > b
}
