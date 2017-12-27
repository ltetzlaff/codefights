function companyBotStrategy(trainingData: number[][]): number {
  const right = trainingData.filter(t => t[1] === 1)
  return right.length ? right.reduce((a, v) => a += v[0], 0) / right.length : 0
}
