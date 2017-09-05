function sudoku(grid: number[][]): boolean {
    const N = 3
    const N2 = N*N
    
    // Trace columns
    for (let x = 0; x < N2; x++) {
        const col : number[] = []
        for (let y = 0; y < N2; y++) {
            const cell = grid[x][y]
            if (cell < 1 || cell > 9 || col.find(n => n === cell) !== undefined) return false
            col.push(cell)
        }
    }
    
    // Trace rows
    for (let y = 0; y < N2; y++) {
        const row : number[] = []
        for (let x = 0; x < N2; x++) {
            const cell = grid[x][y]
            if (row.find(n => n === cell) !== undefined) return false
            row.push(cell)
        }
    }
    
    // Trace blocks
    for (let m = 0; m < N; m++) {
        for (let n = 0; n < N; n++) {
            const block : number[] = []
            for (let x = 0; x < N; x++) {
                for (let y = 0; y < N; y++) {
                    const cell = grid[m * N + x][n * N + y]
                    if (block.find(n => n === cell) !== undefined) return false
                    block.push(cell)
                }
            }
        }
    }
    
    return true
}
