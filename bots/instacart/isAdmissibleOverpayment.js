function isAdmissibleOverpayment(prices, notes, x) {
  let overpay = 0
  for (let i = 0, len = prices.length; i < len; i++) {
    const insta = prices[i]
    const store = (prices[i] / getModifier(notes[i])).toFixed(2)
    overpay += insta - store
  }
  return overpay <= x
}

function getModifier(note) {
  const higher = /([0-9.]+)% higher/.exec(note)
  if (higher) return 1 + Number(higher[1])/100

  const lower = /([0-9.]+)% lower/.exec(note)
  if (lower) return 1 - Number(lower[1])/100

  return 1
}
