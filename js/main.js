let d = 100
let total = 100
let xs = []
let ys = []
let dxs = []
let dys = []



function setup() {
  createCanvas(innerWidth, innerHeight, WEBGL)

  for (let i = 0; i < total; i++) {
    xs.push(random(0, width))
    ys.push(random(0, height))
    dxs.push(random(-1,3))
    dys.push(random(-3,1))
  }
}

function drawOverlaps(x, y) {
  let r = random(0, 255)
  let g = random(0, 255)
  let b = random(0, 255)
  stroke(r,g,b, 100)
  for (let i = 0; i < total; i++) {
    let distance = dist(x, y, xs[i], ys[i])
    if (distance < d && distance != 0) {
      ellipsoid(x, y, xs[i])
    }
  }
}

// function drawOverlapsLines(x, y) {
//   let r = random(0, 255)
//   let g = random(0, 255)
//   let b = random(0, 255)
//   stroke(r,g,b, 100)
//   for (let i = 0; i < total; i++) {
//     let distance = dist(x, y, xs[i], ys[i])
//     if (distance < d && distance != 0) {
//       lines(x, y, xs[i], ys[i])
//     }
//   }
// }

function draw() {
  for (let i = 0; i < total; i++) {
    xs[i] += dxs[i]
    ys[i] += dys[i]
    drawOverlaps(xs[i], ys[i])
  }
}
// function mouseMoved () {
//   // let x = random(0, width)
//   // let y = random(0, height)
//   let x = mouseX
//   let y = mouseY
//   let d = random(100, 200)

//   let r = random(0, 255)
//   let g = random(0, 255)
//   let b = random(0, 255)
  
//   strokeWeight(5)
//   stroke(255, 0, 0)
//   fill(r, g, b, 100)
//   box(x, y, d)
// }

