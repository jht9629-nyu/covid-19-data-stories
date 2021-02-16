function load_image(rec) {
  loadImage(rec.fpath, (img) => {
    console.log(a_recs.length, 'loadImage', rec.fpath);
    // if (a_monoc) mono_img(img);
    // if (a_mask) mask_img(img);
    rec.img = img;
    a_recs.push(rec);
  });
}

function mono_img(img) {
  img.loadPixels();
  for (i = 0; i < img.pixels.length; i += 4) {
    let avg = (img.pixels[i] + img.pixels[i + 1] + img.pixels[i + 2]) / 3;
    img.pixels[i] = avg;
    img.pixels[i + 1] = avg;
    img.pixels[i + 2] = avg;
  }
  img.updatePixels();
}

// d: 'SHAIMEEK RAIJEEN FRAZIER, 21, The Bronx',
// e: 'April 23, 2020',
// h: 'https://projects.thecity.nyc/covid-19-deaths-img/Shaimeek_Frazier.jpg',
