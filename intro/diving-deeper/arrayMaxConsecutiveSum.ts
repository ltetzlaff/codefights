function arrayMaxConsecutiveSum(a: number[], k: number): number {
  let sum : number = 0
  
  // Initialize
  for (let n = 0; n < k; n++) {
      sum += a[n]
  }
  
  let max : number = sum
  
  // Shifting window
  for(let i = k; i < a.length; i++) {   
      sum -= a[i - k]
      sum += a[i]
      if (sum > max) max = sum
  }
  return max
}