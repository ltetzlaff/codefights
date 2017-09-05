function sumUpNumbers(s: string): number {
  return (s.match(/(\d+)/g) || ["0"])
      .map(Number)
      .reduce((a, v) => a + v)
}
