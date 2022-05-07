let a_bubbles = [];
let a_alpha = 60;
let n_start = 20;
let a_canvas;
let save_count = 0;
// let a_select_color;
let back_color = 200;
let a_img;
let a_scale = 4;
let load_index = 0;
let images_prefix = '../images/';
let a_recs = [];
let present_index = 0;
let cycle_count = 0;
let cycle_limit = 10000;
// let cycle_limit = 1000;
let cycle_background_reset = 1;

function setup() {
  // print('setup img', a_img)
  // a_canvas = createCanvas(a_img.width * a_scale, a_img.height * a_scale);
  a_canvas = createCanvas(800, 800);
  background(back_color);
  add_bubbles(n_start);
  // init_ui();
  load_next();
}

function draw() {
  if (!a_img) {
    select_img();
    return;
  }
  cycle_count++;
  if (cycle_count > cycle_limit) {
    cycle_count = 0;
    present_index = (present_index + 1) % a_recs.length;
    a_img = null;
    if (cycle_background_reset) {
      background(back_color);
    }
    return;
  }
  for (let bub of a_bubbles) {
    draw_bubble(bub);
  }
}

function select_img() {
  if (present_index < a_recs.length) {
    a_img = a_recs[present_index].img;
  }
}

function load_next() {
  console.log('load_next load_index', load_index);
  if (load_index >= a_refs.length) {
    // load_reset();
    console.log('load_next return');
    return;
  }
  let rec = a_refs[load_index];
  load_index += 1;
  if (rec.h) {
    let arr = rec.h.split('/');
    let fname = arr[arr.length - 1];
    rec.fpath = images_prefix + fname;
    rec.himg = createImg(rec.fpath, 'image');
    load_image(rec);
  }
}

function add_bubble(x, y) {
  // let r = random([4, 4, 4, 4, 4, 4, 4, 4, 8, 8, 16]);
  let r = random([4, 4, 4, 4, 4, 4, 8, 8, 16]);
  let alpha = a_alpha;
  let bub = { x, y, r, alpha };
  a_bubbles.push(bub);
}

function reset_bubbles() {
  a_bubbles = [];
  background(back_color);
}

function canvas_mouseMoved() {
  if (mouseIsPressed) {
    add_bubble_mouseXY();
  }
}

function more_bubbles() {
  add_bubbles(n_start);
  print('more_bubbles a_bubbles.length', a_bubbles.length);
}

function save_canvas() {
  let fname = 'bubm-' + save_count + '-';
  fname += new Date().toISOString();
  print('save_btn mousePressed fname', fname);
  saveCanvas(fname, 'png');
  save_count += 1;
}

function add_bubbles(n) {
  for (let ind = 0; ind < n; ind++) {
    let x = random(0, width);
    let y = random(0, height);
    add_bubble(x, y);
  }
}

function add_bubble_mouseXY() {
  add_bubble(mouseX, mouseY);
  print('add_bubble_mouseXY', a_bubbles.length);
}

function draw_bubble(bub) {
  move_bubble(bub);
  show_bubble(bub);
}

function move_bubble(bub) {
  let r = bub.r;
  let x = int(bub.x);
  x = x - (x % r);
  x = x + random([-1, 0, 1]) * r;
  let y = int(bub.y);
  y = y - (y % r);
  y = y + random([-1, 0, 1]) * r;
  // constrain(n, low, high)
  bub.x = constrain(x, 0, width);
  bub.y = constrain(y, 0, height);
  // print('x', x, 'y', y)
}

function show_bubble(bub) {
  // let col = bub.gray;
  let x = int(bub.x / a_scale);
  let y = int(bub.y / a_scale);
  let col = a_img.get(x, y);
  col[3] = bub.alpha;
  // stroke(col, bub.alpha);
  strokeWeight(0);
  fill(col);
  // circle(bub.x, bub.y, bub.r * 2);
  circle(bub.x, bub.y, bub.r);
}

// from https://editor.p5js.org/jht1493/sketches/LrhcIzvr2
