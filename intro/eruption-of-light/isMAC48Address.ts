function isMAC48Address(s: string): boolean {
  return /^([0-9a-fA-F]{2}-){5}[0-9a-fA-F]{2}$/.test(s)
}
