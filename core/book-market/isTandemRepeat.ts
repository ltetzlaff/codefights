function isTandemRepeat(s: string): boolean {
    if (s.length % 2 === 1) return false
    const half = s.length / 2
    return s.slice(0, half) === s.slice(-half)
}