function growingPlant(upSpeed, downSpeed, desiredHeight) {
  const d = (desiredHeight - downSpeed)/(upSpeed - downSpeed)
  return d < 1 ? 1 : d
}
