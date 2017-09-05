function differentSquares(m: number[][]): number {
  const lx = m.length
  const ly = m[0].length
  const windows = new Set<string>()
  for(let x = 1; x < lx; x++) {
      for(let y = 1; y < ly; y++) {
          windows.add("" + m[x][y] + m[x][y - 1] + m[x - 1][y] + m[x - 1][y - 1])
      }
  }
  return windows.size
}
