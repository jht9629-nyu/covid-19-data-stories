let a_recs = [];
let load_index = 0;
let tint_index = 0;
let a_run = 1;
let a_fast = 0;
let a_fast_n = 30;
let a_monoc = 1;
let a_mask = 1;
let images_prefix = '../images/';
let fade_count = 30 * 5;
let fade_delta = 1;
let fade_index = 0;

function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
  // frameRate(a_fps);
  background(100);
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
  background(200);
  let step = 0;
  if (tint_index >= a_recs.length) {
    tint_index = 0;
    if (tint_index >= a_recs.length) return;
  }
  fade_index = fade_count;
  let rec = a_recs[tint_index];
  tint_index += step;
  let tval = map(fade_index, 0, fade_count, 0, 255);
  // tint(255, tval);

  mask_img(rec.img);

  // image(rec.img, 0, 0, width, height);

  // image(m_layer, 0, 100, width, height);

  show_text('msg', rec.d + ' ' + rec.e);
}

let m_layer;
let a_x = 0;
let a_m;

function mask_img(img) {
  if (!m_layer) {
    m_layer = createGraphics(img.width, img.height);
  }
  if (mouseIsPressed) {
    // console.log('mouseIsPressed');
    m_layer = createGraphics(img.width, img.height);
    // tint_index = (tint_index + 1) % a_recs.length;
    // m_layer.strokeWeight(0);
    // m_layer.fill(0, 0, 0, 0);
    // m_layer.rect(0,0,img.width,img.height);
  }
  {
    let w = 30;
    let h = 30;
    let x = map(mouseX,0,width,0,img.width,true);
    let y = map(mouseY,0,height,0,img.height,true);
    m_layer.fill(255, 255, 255, 255);
    m_layer.ellipse(x, y, w, h);
  }

  let img2 = img.get();
  img2.mask(m_layer);
  image(img2, 0, 0, width, height);
}

function load_reset() {
  removeElements();
  a_recs = [];
  load_index = 0;
  tint_index = 0;
  sketch_ui();
}
