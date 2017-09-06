function crosswordFormation(words: string[]): number {
  const SPACING = 2
  let works = 0
  
  // what an atrocity ...
  // the indentation below is due to cf's restriction of "too many whitespace characters"
  words.forEach((w1, a) => {
  words.forEach((w2, b) => {
  words.forEach((w3, c) => {
  words.forEach((w4, d) => {
      // diagonal
      if (a === b || a === c || a === d || b === c || b === d || c === d) return

      // check words
      // first
      for (let i = 0; i < w1.length; i++) {
          for (let j = i + SPACING; j < w1.length; j++) {
              // second
              for (let k = 0; k < w2.length; k++) {
                  for (let l = k + SPACING; l < w2.length; l++) {

                      // third
                      for (let m = 0; m < w3.length; m++) {
                          const n = m + j - i

                          // fourth
                          for (let o = 0; o < w4.length; o++) {
                              const p = o + l - k

                              // all intersections valid?
                              if (n < w3.length && p < w4.length) {
                                  if (   (w1[i] === w2[k])
                                      && (w2[l] === w3[m])
                                      && (w3[n] === w4[p])
                                      && (w4[o] === w1[j]))
                                      works++
                              }
                          }
                      }
                  }
              }
          }
      }
  })
  })
  })
  })
  return works
}
