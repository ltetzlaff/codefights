function tennisSet(score1, score2) {
    const win = (a, b) => (a === 6 && b < 5) || (a == 7 && (b == 5 || b == 6))
    return win(score1, score2) || win(score2, score1)
}
