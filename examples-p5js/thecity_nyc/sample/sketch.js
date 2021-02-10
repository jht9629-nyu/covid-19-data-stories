let a_imgs;
let load_index = 0;
let tint_index = 0;
let images_prefix = './images/';
let a_run = 1;
let a_fast = 0;
let a_fast_n = 30;

function setup() {
  createCanvas(800, 800);
  pixelDensity(1);
  a_imgs = [];
  frameRate(1);
  background(255);
  sketch_ui();
}

function draw() {
  if (! a_run) return;
  load_next();
  tint_next();
}

function load_next() {
  if (load_index >= a_refs.length) {
    return;
  }
  let rec = a_refs[load_index];
  load_index += 1;
  if (rec.h) {
    const arr = rec.h.split('/');
    const fname = arr[arr.length - 1];

    createImg(images_prefix + fname, 'image');
    load_image(images_prefix + fname);
  }
}

function load_image(h) {
  loadImage(h, (img) => {
    console.log('loadImage', h);
    a_imgs.push(img);
  });
}

function tint_next() {
  if (tint_index >= a_imgs.length) {
    tint_index = 0;
    if (tint_index >= a_imgs.length) return;
  }
  let img = a_imgs[tint_index];
  tint_index += 1;
  tint(255, 10);
  image(img, 0, 0, width, height);
}
