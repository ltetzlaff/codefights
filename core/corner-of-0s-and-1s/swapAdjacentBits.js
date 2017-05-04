function swapAdjacentBits(n) {
  return parseInt(pad(n.toString(2),32).split("").reverse().join("").replace(/[01]{2}/g, m => m.split("").reverse().join("")).split("").reverse().join(""), 2) ;
}
function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}