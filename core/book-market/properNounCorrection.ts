function properNounCorrection(noun: string): string {
    return noun
        .split("")
        .map((c, i) => i === 0 ? c.toUpperCase() : c.toLowerCase())
        .join("")
}