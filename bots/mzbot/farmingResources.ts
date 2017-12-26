type Vector2 = {
  x: number
  y: number
}

function farmingResources(friendlyTroops: number[], enemyTroops: number[], loggingCamp: number[], impassableCells: number[][]): boolean {
  const seen = new Set<string>()
  let futureSteps: Vector2[] = []
  
  const tryStep = (x: number, y: number): void => {
    if (Math.abs(x) > 20 || Math.abs(y) > 20) return
    if (seen.has(x + "|" + y)) return
    if (!impassableCells.some(a => a[0] === x && a[1] === y)) {
      futureSteps.push({ x, y })
      seen.add(x + "|" + y)
    }
  }

  const path = (units: number[]): number => {
    seen.clear()
    let steps: Vector2[] = [ { x: units[0], y: units[1] } ]

    let len = -1
    let currentLen = 0

    while (len === -1) {
      if (steps.length === 0) return Infinity

      while (steps.length > 0) {
        const pos: Vector2 = steps.pop()
        if (pos.x === loggingCamp[0] && pos.y === loggingCamp[1]) {
          len = currentLen
          break
        }
        const { x, y } = pos
        tryStep(x, y - 1)
        tryStep(x, y + 1)
        tryStep(x + 1, y - 1)
        tryStep(x + 1, y)
        tryStep(x - 1, y)
        tryStep(x - 1, y + 1)
      }
      steps = futureSteps
      futureSteps = []
      currentLen++
    }
    return len * units[2]
  }
     
  return (path(friendlyTroops) < path(enemyTroops))
}
