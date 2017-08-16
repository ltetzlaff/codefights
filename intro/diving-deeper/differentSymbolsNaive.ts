function differentSymbolsNaive(s: string): number {
    const m = new Set<string>()
    s.split("").forEach(c => m.add(c))
    return m.size
}