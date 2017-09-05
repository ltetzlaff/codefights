function validTime(time: string): boolean {
  const format = /^\d{2}:\d{2}$/.test(time)
  if (!format) return false
  
  const [ h, m ] = time.split(":").map(Number)
  return h <= 23 && m <= 59 && !(h === 24 && m === 0)
}
