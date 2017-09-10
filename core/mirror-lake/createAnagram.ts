function createAnagram(s: string, t: string): number {
  const ALPHABET = 26
  const a = "A".charCodeAt(0)
  
  const m1 = new Uint8Array(ALPHABET)
  const m2 = new Uint8Array(ALPHABET)
  
  for (let i = 0; i < s.length; i++) {
      const n1 = s[i].charCodeAt(0) - a
      const n2 = t[i].charCodeAt(0) - a
      m1[n1]++
      m2[n2]++
  }
  
  let ret = 0
  for (let i = 0; i < ALPHABET; i++) {
      const diff = Math.abs(m1[i] - m2[i])
      ret += diff
  }
  return ret/2
}