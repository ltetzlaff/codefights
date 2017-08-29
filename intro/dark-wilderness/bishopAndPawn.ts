function bishopAndPawn(bishop: string, pawn: string): boolean {
    const coords = c => {
        return {
            x: c[0].charCodeAt(0) - "a".charCodeAt(0),
            y: parseInt(c[1]) - 1
        }
    }
    
    const c1 = coords(bishop)
    const c2 = coords(pawn)
    return Math.abs(c2.x - c1.x) === Math.abs(c2.y - c1.y)
}
