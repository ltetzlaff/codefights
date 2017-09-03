function findEmailDomain(a: string): string {
  return a.split("@").pop()
}
