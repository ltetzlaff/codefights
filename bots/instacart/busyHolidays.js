function busyHolidays(shoppers, orders, leadTime) {
  const sort = (a, b) => a[1] - a[0] > b[1] - b[0]

  // Convert to minutes
  shoppers = shoppers
    .map(s => [ hhToMin(s[0]), hhToMin(s[1]) ])
    .sort(sort)

  orders = orders
    .map((o, i) => [ hhToMin(o[0]), hhToMin(o[1]), leadTime[i] ])
    .sort(sort)

  const done = []
  for (var i = 0, len = orders.length; i < len; i++) {
    const [ from, to, takes ] = orders[i]  

    const canDo = shoppers.findIndex(s => {
      console.log ("start:" + Math.max(s[0], from))
      console.log("takes:" + takes)
      console.log ("end:" + Math.min(s[1], to))
      return Math.max(s[0], from) + takes <= Math.min(s[1], to)
    })

    if (canDo >= 0) {
      shoppers.splice(canDo, 1)
      done.push(i)
    }
  }

  done.reverse().forEach(d => {
    orders.splice(d, 1)
    leadTime.splice(d, 1)
  })

  return orders.length === 0
}

function hhToMin(str) {
  const splits = str.split(":")
  const hh = Number.parseInt(splits[0], 10)
  const mm = Number.parseInt(splits[1], 10)
  return hh*60 + mm
}
