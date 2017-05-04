function increaseNumberRoundness(n) {
    while ((n /= 10) % 10 === 0) { }
    return (n +"").split("").some(c => c === "0")
}
