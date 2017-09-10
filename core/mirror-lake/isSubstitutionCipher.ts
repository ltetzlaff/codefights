function isSubstitutionCipher(s1: string, s2: string): boolean {
    const abc1 = new Map<string, string>()
    const abc2 = new Map<string, string>()
    
    for (let i = 0; i < s1.length; i++) {
        const c1 = s1[i]
        const c2 = s2[i]
        
        // first
        const inAbc1 = abc1.get(c1)
        if (inAbc1) {
            if (inAbc1 !== c2) return false
        } else {
            abc1.set(c1, c2)
        }
        
        // second
        const inAbc2 = abc2.get(c2)
        if (inAbc2) {
            if (inAbc2 !== c1) return false
        } else {
            abc2.set(c2, c1)
        }
    }
    return true
}