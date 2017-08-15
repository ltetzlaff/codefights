function almostIncreasingSequence(s) {
    var j=0, slice=0
    for (var i = 0, len = s.length; i <= len; i++) {
        if (s[i-1] >= s[i]) {
            if (i == 1 || i == len - 1 || (i < len - 1 && (s[i-2] < s[i] || s[i-1] < s[i+1]))) {
                j++
            } else {
                slice++
            }
        }
    }
    
    return j <= 1 && slice == 0
}
