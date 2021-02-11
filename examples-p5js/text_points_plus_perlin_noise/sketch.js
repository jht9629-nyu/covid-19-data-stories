let font;
let pts;
let pt_size = 5;

function preload() {
  font = loadFont("LeagueGothic-Regular.otf");
}

function setup() { 
  createCanvas(600, 400);
  // let tz = 100;
  let tz = 250;
  let sf = 0.9;
  // let sf = 0.09;
  pts = font.textToPoints('Allison', 0, 0, tz,
                          {sampleFactor: sf,
                           simplifyThreshold: 0});
  console.log('pts.length', pts.length)
} 

function ns(x, y, z, scale_, min_, max_) {
  return map(
    noise(x*scale_, y*scale_, z*scale_),
    0, 1, min_, max_);
}

let xz = 0;
let yz = 1000;

function draw() { 
  background(0);
  noStroke();
  fill(0, 255, 0);
  push();
  translate(75, 275);
  for (let i = 0; i < pts.length; i++) {
    let xoff = ns(pts[i].x, pts[i].y, xz, 0.005, -50, 50);
    let yoff = ns(pts[i].y, pts[i].x, yz, 0.005, -50, 50);
    ellipse(pts[i].x + xoff, pts[i].y + yoff, pt_size, pt_size);
  }
  pop();
  xz += 2;
  yz += 2;
}

// remixed from
// https://editor.p5js.org/allison.parrish/sketches/HJqO6tdQG
