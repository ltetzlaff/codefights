function isCaseInsensitivePalindrome(s: string): boolean {
    const str = s.toUpperCase()
    return str === str.split("").reverse().join("")
}