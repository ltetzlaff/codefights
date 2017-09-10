function stringsConstruction(a: string, b: string): number {
    const B = b.split("")
    const A = a.split("")
    const mins = A.map(c => B.filter(l => l === c).length/A.filter(l => l === c).length)
    return Math.min(...mins) | 0
}