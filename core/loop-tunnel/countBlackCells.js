function countBlackCells(n, m) {
    const ggT = (n1, n2) => n2 ? ggT(n2, n1 % n2) : n1
    return ggT(n, m) + n + m - 2
}
