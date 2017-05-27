function pagesNumberingWithInk(current, n) {
    current--
    while (n > 0) {
        n -= (++current + "").length
    }
    return n < 0 ? current - 1 : current
}
