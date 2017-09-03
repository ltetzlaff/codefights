function electionsWinners(votes: number[], k: number): number {
  const max = Math.max(...votes)
  
  if (k === 0 && votes.filter(c => c === max).length > 1) return 0
  
  return votes.filter(c => c + k > max).length || 1
}
