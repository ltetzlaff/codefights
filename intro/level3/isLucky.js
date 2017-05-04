function isLucky(n) {
    var s = (n + "")
    var len = Math.floor(s.length / 2)
    var sum1 = s.substring(0,        len).split("").map(num).reduce(acc, 0);
    var sum2 = s.substring(len, s.length).split("").map(num).reduce(acc, 0);
    console.log(sum1, sum2)
    return sum1 == sum2
}

function num(c) {
    return Number.parseInt(c)
}

function acc(acc, val) {
    return acc + val
}