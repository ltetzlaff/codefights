function rectangleRotation(a, b) {
    const num = n => Math.ceil(n / Math.sqrt(2))
    const A = num(a)
    const B = num(b)
    
    return A * B + (A - 1) * (B - 1) - (A % 2 !== B % 2)
}
