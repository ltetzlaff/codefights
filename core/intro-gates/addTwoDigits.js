function addTwoDigits(n) {
    return (n + "").split("").map(n => Number.parseInt(n)).reduce((a,v) => a+v)
}
