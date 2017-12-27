function taskMaker(source: string[], challengeId: number): string[] {
  const challengeRe = /\s*\/\/DB [0-9]+\/\//
  const thisChallengeRe = new RegExp(`(\\s*)\\/\\/DB ${challengeId}\\/\\/(.*)`)

  return source
    .filter(line => !challengeRe.test(line) || thisChallengeRe.test(line))
    .filter((line, i, arr) => challengeRe.test(line) || i + 1 >= arr.length || !challengeRe.test(arr[i + 1]))
    .map(line => {
      if (thisChallengeRe.test(line)) {
        const [ , indentation, contents ] = thisChallengeRe.exec(line)
        return indentation + contents
      }

      return line
    })
}
