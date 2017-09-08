function isUnstablePair(f1: string, f2: string): boolean {
  return f1 < f2 !== f1.toUpperCase() < f2.toUpperCase()
}