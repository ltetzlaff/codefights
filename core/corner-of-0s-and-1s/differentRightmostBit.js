function differentRightmostBit(n, m) {
  return Math.pow(2, (n ^ m).toString(2).split("").reverse().indexOf("1")) ;
}
