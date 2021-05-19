function setup() {
  createCanvas(innerWidth, innerHeight)
  background(255)
  let x = width / 2
  let y = height / 2
  let r = width / 4
  strokeWeight(10)
  stroke(255, 0, 0)
  fill(255, 0, 255, 100)
  ellipse(x, y, r)
}
