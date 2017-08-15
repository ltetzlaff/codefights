function alphabeticShift(s) {
    return s.split("").map(loopChars).join("")
}

const loopChars = (c) => String.fromCharCode((c.charCodeAt(0) - "a".charCodeAt(0) + 1) % ("z".charCodeAt(0) -  "a".charCodeAt(0) + 1) + "a".charCodeAt(0))