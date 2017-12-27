function packageBoxing(pkg, boxes) {
  const [ width, height, depth ] = pkg

  return boxes.findIndex(([ x, y, z ]) => {
    return x >= width && y >= height && z >= depth
  })
}
