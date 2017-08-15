function stringsRearrangement(arr : string[]) {
    const adjacent = (a : string, b : string) => {
        let mismatches = 0
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) mismatches++
            if (mismatches > 1) return false
        }
        return mismatches == 1
    }
    
    const checkForAdjacencies = () => {
        for (let i = 0; i < arr.length - 1; i++) {
            if (!adjacent(arr[i], arr[i + 1])) return false
        }
        return true
    }
    
    const recurse = (level : number) : boolean => {
        // Check final length
        if (level === arr.length) {
            return checkForAdjacencies()
        }
        
        // Swap around and go deeper
        for (let i = level; i < arr.length; i++) {
            [ arr[level], arr[i] ] = [ arr[i], arr[level] ]
            if (recurse(level + 1)) {
                return true
            }
            [ arr[level], arr[i] ] = [ arr[i], arr[level] ]
        }
        return false
    }
    return recurse(0)
}