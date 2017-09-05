function longestWord(text: string): string {
    const words = text.match(/([a-z]+)/gi)
    let max = ""
    words.forEach(w => {
        if (w.length > max.length) max = w
    })
    return max
}
