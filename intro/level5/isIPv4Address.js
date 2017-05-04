function isIPv4Address(s) {
    var splits = s.split(".").map(n => {
        if (/[^0-9]/.test(n)) return -1
        return parseInt(n)
    })
    var len = splits.length
    console.log(splits)
    return len === 4 && splits.every(n => n >= 0 && n <= 255)
}
