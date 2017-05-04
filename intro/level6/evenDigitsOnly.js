function evenDigitsOnly(n) {
    return (n + "").split("").map(parseFloat).every(n => n % 2 == 0)
}
