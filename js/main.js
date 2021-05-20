// let d = 75
// let total = 200
// let xs = []
// let ys = []
// let dxs = []
// let dys = []



function setup() {
  createCanvas(innerWidth, innerHeight)
  background(0)

  // for (let i = 0; i < total; i++) {
  //   xs.push(random(0, width))
  //   ys.push(innerHeight/2)
  //   dxs.push(random(-2,2))
  //   dys.push(random(-2,2))
  // }
}

// // function drawOverlapsEllipse(x, y) {
// //   let r = random(0, 255)
// //   let g = random(0, 255)
// //   let b = random(0, 255)
// //   stroke(r,g,b, 100)
// //   for (let i = 0; i < total; i++) {
// //     let distance = dist(x, y, xs[i], ys[i])
// //     if (distance < d && distance !=0) {
// //       // fill(r, g, b, 100)
// //       ellipse(x, y, xs[i], ys[i])
// //     }
// //   }
// // }

// function drawOverlapsLines(x, y) {
//   let r = random(0, 255)
//   let g = random(0, 255)
//   let b = random(0, 255)
//   stroke(r,g,b, 20)
//   for (let i = 0; i < total; i++) {
//     let distance = dist(x, y, xs[i], ys[i])
//     if (distance < d && distance !=0) {
//       line(x, y, xs[i], ys[i])
//     }
//   }
// }


function mouseMoved () {
  // let x = random(0, width)
  // let y = random(0, height)
  let x = mouseX
  let y = height/16
  let d = mouseY

  let r = random(0, 255)
  let g = random(0, 255)
  let b = random(0, 255)
  
  strokeWeight(5)
  stroke(255, 0, 0)
  fill(x, g, d, 100)
  square(x, y, d)
  drawOverlapsLines(x, y)

}

// // function mouseIsPressed () {

// //   // let x = random(0, width)
// //   // let y = random(0, height)
// //   let x = mouseX
// //   let y = height/16
// //   let d = mouseY

// //   let r = random(0, 255)
// //   let g = random(0, 255)
// //   let b = random(0, 255)
  
// //   strokeWeight(5)
// //   stroke(255, 0, 0)
// //   fill(x, g, d, 100)
// //   ellipse(x, y, d)


// // }

// function draw() {
//   background(0)
//   for (let i = 0; i < total; i++) {
//     // xs[i] += dxs[i]
//     ys[i] += dys[i]
//     // drawOverlapsEllipse(xs[i], ys[i])
//     if (ys[i] > width || ys[i] < 0) dys[i] = -dys[i] 
//     drawOverlapsLines(xs[i], ys[i])
//     // drawOverlapsEllipse(xs[i], ys[i])

//   }
// }
