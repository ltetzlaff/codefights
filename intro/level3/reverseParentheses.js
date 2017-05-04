function reverseParentheses(s) {
    var re = /(\([a-zA-Z\s]+\))/g
    var f = m => m.substring(1, m.length - 1).split("").reverse().join("")
    return s.replace(re, f).replace(re, f).replace(re, f).replace(re, f).replace(re, f) // this is just 5 levels lel
}
