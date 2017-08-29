function longestDigitsPrefix(inputString: string): string {
    return /^\d*/.exec(inputString)[0]
}
