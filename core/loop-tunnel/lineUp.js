function lineUp(commands) {
    var same = true
    var ret = 0
    commands.split("").forEach(cmd => {
        if (cmd === "L" || cmd === "R") {
            same ^= true
        }
        if (same) ret++
    })
    return ret
}
