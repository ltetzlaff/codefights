function deleteDigit(n: number): number {
    const permutations = (n + "").split("") // for every digit
        .map((_, i1, a) => a.filter((_, i2) => i1 !== i2).join("")) // create a copy without that digit
        .map(Number)
        .sort()
    
    return Math.max(...permutations)
}
