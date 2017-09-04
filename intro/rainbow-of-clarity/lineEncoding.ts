function lineEncoding(s: string): string {
    const res : string[] = []
    
    let current = s[0]
    let n = 1
    for (let i = 1; i < s.length; i++) {
        if (current === s[i]) {
            n++
        } else {
            res.push(n > 1 ? n + current : current)
            n = 1
        }
            
        current = s[i]
    }
    res.push(n > 1 ? n + current : current)
    
    return res.join("")
}
