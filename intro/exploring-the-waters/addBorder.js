function addBorder(pic) {
    pic = pic.map(l => "*" + l + "*")
    var line = pic[0].split("").map(c => "*").join("")
    pic.unshift(line)
    pic.push(line)
    return pic
}
