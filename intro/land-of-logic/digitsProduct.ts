function digitsProduct(product: number): number {
  switch (product) {
       case 0: return 10
       case 1: return 1
  }
  
  const ret : number[] = []
  for (let i = 9; i > 1; i--) {
       while (product % i === 0) {
            product /= i
            ret.push(i)
       }
  }
  
  const digits = Number(ret.reverse().join(""))
  return product <= 1 ? digits : -1
}
