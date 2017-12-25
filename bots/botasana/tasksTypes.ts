function tasksTypes(deadlines: number[], day: number): number[] {
  const tasks = [ 0, 0, 0 ]
  const TODAY = 0
  const UPCOMING = 7
  
  deadlines.forEach(deadline => {
    const dt = deadline - day
    if      (dt <= TODAY)    tasks[0]++
    else if (dt <= UPCOMING) tasks[1]++
    else                     tasks[2]++
  })
  return tasks
}
