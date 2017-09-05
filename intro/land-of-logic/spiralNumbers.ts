function spiralNumbers(n: number): number[][] {
    const m = new Array<number[]>(n)
    for (let i = 0; i < n; i++) {
        m[i] = new Array<number>(n)
    }
    
    let x = 0, y = 0
    
    let total = n * n,
        dx = 0,
        dy = 1,
        nx= 1,
        ny = 1
    
    n--
    
    while (nx <= total) {
        m[x][y] = nx
        
        x += dx
        y += dy
        
        if (ny === n) {
            if (dx < 0) {
                x++
                y++
                n -= 2
            }
            
            ny = dy
            dy = -dx
            dx = ny
            ny = 0
        }
        
        ny++
        nx++
    }
    return m
}
