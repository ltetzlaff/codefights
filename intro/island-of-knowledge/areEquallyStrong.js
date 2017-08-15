function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    var you = [yourLeft, yourRight].sort((a,b) => a-b)
    var fr = [friendsLeft, friendsRight].sort((a,b) => a-b)
    return you[0] == fr[0] && you[1] == fr[1]
}
