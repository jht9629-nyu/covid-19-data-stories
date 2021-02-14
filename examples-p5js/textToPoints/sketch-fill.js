let font;
function preload() {
  // loadJSON_brooklyn_shape/assets/ChunkFive-Regular.otf
  // font = loadFont('assets/inconsolata.otf');
  font = loadFont('../assets/ChunkFive-Regular.otf');
}

let points;
let bounds;
function setup() {
  createCanvas(400, 500);
  stroke(0);
  strokeWeight(10);
  // fill(255, 104, 204);
  fill('gray');
  let tsize = 100;
  let ttxt = '9';
  points = font.textToPoints(ttxt, 0, 0, tsize, {
    sampleFactor: 5,
    simplifyThreshold: 0,
  });
  bounds = font.textBounds(' ' + ttxt + ' ', 0, 0, tsize);
  console.log('points', points);
}

function draw() {
  background(255);
  beginShape();
  translate((-bounds.x * width) / bounds.w, (-bounds.y * height) / bounds.h);
  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    vertex(
      (p.x * width) / bounds.w +
        (sin((20 * p.y) / bounds.h + millis() / 1000) * width) / 30,
      (p.y * height) / bounds.h
    );
  }
  endShape(CLOSE);
}

// https://p5js.org/reference/#/p5.Font/textToPoints
