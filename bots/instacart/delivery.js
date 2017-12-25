function delivery(order, shoppers) {
  const [ orderDistance, orderMinutes, timeframe ] = order

  return shoppers.map(([ distance, speed, minutes ]) => {
    const t = (distance + orderDistance) / speed + minutes
    const idle = orderMinutes - t
    if (idle > 0) return false
    if (idle >= -timeframe) return true
    return false
  })
}
