const { a_refs } = require('./a_refs');

function extract_img() {
  let hn = 0;
  a_refs.forEach((ent) => {
    if (ent.h) {
      const arr = ent.h.split('/');
      const fname = arr[arr.length - 1];
      console.log('curl ' + ent.h + ' -o ' + fname);
      hn++;
    }
  });
  // console.log('hn', hn);
}

extract_img();

// curl https://projects.thecity.nyc/covid-19-deaths-img/Shaimeek_Frazier.jpg -o Shaimeek_Frazier.jpg

// extract.js
// https://editor.p5js.org/jht1493/sketches/w83LHBCUr
// covid-19-deaths a_refs
// https://projects.thecity.nyc/covid-19-deaths/
// a_refs created by running scrape_refs in console
// All / Sort youngest
// Scroll to bottom to get all images loaded
// [] better names
function scrape_refs() {
  let m = document.querySelectorAll('li');
  let q = [];
  let i = 0;
  let hn = 0;
  m.forEach((n) => {
    let d = n.querySelector('.obit-description');
    if (d) {
      let o = { i };
      i++;
      o.d = d.innerText;
      if (d.nextElementSibling) {
        o.e = d.nextElementSibling.innerHTML;
      }
      let h = n.querySelector('img');
      if (h && h.src.startsWith('https://projects')) {
        o.h = h.src;
        hn++;
      }
      q.push(o);
    }
  });
  let s = JSON.stringify(q, null, 2);
  console.log(s);
  console.log('q.length', q.length, 'hn', hn);
}
// q.length – 1963 – "hn" – 230
// q.length 2582 hn 361
// q.length 2631 hn 456
