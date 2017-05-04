function arrayPacking(a) {
    return a.reduce((acc, val, i) => acc + (val << (8*i)))
}
