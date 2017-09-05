function fileNaming(names: string[]): string[] {
  const newNames : string[] = []
  const collision = n => newNames.find(nn => nn === n) !== undefined
  
  names.forEach(n => {
      if (collision(n)) n += "(1)"
      while (collision(n)) {
          n = n.replace(/\(([0-9]+?)\)$/, (_, num) => "(" + (Number(num) + 1) + ")")
      }
      newNames.push(n)
  })

  return newNames
}
