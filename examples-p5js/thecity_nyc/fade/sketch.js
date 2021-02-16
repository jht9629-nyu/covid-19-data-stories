let a_recs = [];
let load_index = 0;
let tint_index = 0;
let a_run = 1;
let a_fast = 0;
let a_fast_n = 30;
let a_monoc = 1;
let a_mask = 1;
let images_prefix = '../images/';
let fade_count = 30*5;
let fade_delta = 1;
let fade_index = 0;

function setup() {
  createCanvas(800, 800);
  pixelDensity(1);
  // frameRate(a_fps);
  // background(0);
  sketch_ui();
}

function draw() {
  if (!a_run) return;
  load_next();
  draw_next();
}

function load_next() {
  if (load_index >= a_refs.length) {
    // load_reset();
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

function draw_next() {
  let step = 0;
  if (tint_index >= a_recs.length) {
    tint_index = 0;
    if (tint_index >= a_recs.length) return;
  }
  background(255);
  fade_index += fade_delta;
  if (fade_delta > 0) {
    if (fade_index >= fade_count) {
      fade_index = fade_count;
      fade_delta = -fade_delta;
    }
  } else {
    // fade_delta less than zero
    if (fade_index <= 0) {
      fade_delta = -fade_delta;
      fade_index = 0;
      step = 1;
    }
  }
  let rec = a_recs[tint_index];
  tint_index += step;
  let tval = map(fade_index, 0, fade_count, 0, 255);
  tint(255, tval);
  image(rec.img, 0, 0, width, height);
  show_text('msg', rec.d + ' ' + rec.e);
}

function load_reset() {
  removeElements();
  a_recs = [];
  load_index = 0;
  tint_index = 0;
  sketch_ui();
}
