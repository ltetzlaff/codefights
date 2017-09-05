function messageFromBinaryCode(code: string): string {
  return code.replace(/[01]{8}/g, n => String.fromCharCode(parseInt(n, 2)))
}
