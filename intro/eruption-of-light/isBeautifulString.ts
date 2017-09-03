function isBeautifulString(s: string): boolean {
  const ALPHABET = 26
  const a = "a".charCodeAt(0)
  
  const m = new Uint8Array(ALPHABET)
  s.split("").forEach(c => {
      const n = c.charCodeAt(0) - a
      m[n]++
  })
  
  for (let i = 1; i < ALPHABET; i++) {
      if (m[i] > m[i - 1]) return false
  }
  return true
}
