function willYou(young, beautiful, loved) {
    var s1 = young && beautiful && !loved
    var s2 = loved && (!young || !beautiful)
    return s1 || s2
}
