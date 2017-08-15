function areSimilar(A, B) {
    var misfits = {}, errors = 0
    for (var i = 0, len = A.length; i < len; i++) {
        if (A[i] !== B[i]) {
            errors++
            misfits[A[i]] = 1
            misfits[B[i]] = 2
            if (errors > 2) return false
            if (Object.keys(misfits).length > 2) return false
        }
    }
    return true
}