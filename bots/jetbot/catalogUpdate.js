function catalogUpdate(catalog, updates) {
  for (const update of updates) {
    const entry = catalog.find(line => line[0] === update[0])
    if (entry === undefined) {
      catalog.push(update)
    } else {
      for (const field of update) {
        if (!entry.includes(field)) entry.push(field)
      }
    }
  }

  return catalog
    .map(line => {
      const [ , ...sorted ] = line
      return [ line[0], ...sorted.sort() ]
    })
    .sort((a, b) => a[0] > b[0])
}
