function arrayReplace(a, elem, subst) {
    return a.map(el => el == elem ? subst : el)
}
