function chessKnight(cell: string): number {
  const coords = c => {
      return [
          c[0].charCodeAt(0) - "a".charCodeAt(0),
          parseInt(c[1]) - 1
      ]
  }
  
  const pos = coords(cell)
  let possibilites = 0
  
  ;[[2, 1], [1, 2]].forEach(move => {
      ;[-1, 1].forEach(x => {
          ;[-1, 1].forEach(y => {
              // this move
              const m = [ move[0] * x, move[1] * y ]
              const target = [ pos[0] + m[0], pos[1] + m[1] ]

              // check if move is legal
              if (target[0] >= 0 && target[0] <= 7 && target[1] >= 0 && target[1] <= 7) possibilites++
          })
      })
  })
  
  return possibilites
}
