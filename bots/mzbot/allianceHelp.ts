function allianceHelp(t: number, allianceSize: number): number {
  const allies = Math.min(allianceSize, 10)
  const s = Math.max(60, t * .10 | 0)
  
  return Math.max(0, t - s * allies)
}
