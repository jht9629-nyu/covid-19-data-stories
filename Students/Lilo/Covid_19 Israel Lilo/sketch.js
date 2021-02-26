let events = [];
let numberOfCases = [];
let numberOfDecades = [];
let numberOfDif = [];
let politicalD = [];
let positiveT = [];
let arrayNOC = [];
let arrayevents = [];
let numPts = 263;
let slider;
let val = 0;

// let buttonState = "tostart";


function preload() {
  myFont = loadFont('RobotoCondensed-Light.ttf'); 
  myFont2 = loadFont('RobotoCondensed-BoldItalic.ttf'); 
  events = loadTable('events.csv', 'csv', 'header');
  numberOfCases = loadTable('numberOfCases.csv', 'csv', 'header');
  events = loadTable('events.csv', 'csv', 'header');
  events = loadTable('events.csv', 'csv', 'header');
  events = loadTable('events.csv', 'csv', 'header');
  events = loadTable('events.csv', 'csv', 'header');
}

function setup() {

  createCanvas(1920, 1080);
  // print(numberOfCases);
  

  slider = createSlider(0, 46, 0);
  slider.position(0, windowHeight / 2);
  slider.style('width', '1920px');
  fill(204,0,0);

  for (let i = 0; i < numberOfCases.getRowCount() - 1; i++) {
    arrayNOC.push(int(numberOfCases.getString(i, 1)) / 25);


  }
  // print(arrayNOC);

  for (let i = 0; i < events.getRowCount() - 1; i++) {
    arrayevents.push(int(events.getString(i, 1)) / 25);


  }
  // print(arrayevents);
  
  // print(table.getRowCount() + ' total rows in table');
  // print(table.getColumnCount() + ' total columns in table');

  // for (let r = 0; r < table.getRowCount(); r++)
  //   for (let c = 0; c < table.getColumnCount(); c++) {
  //     print(table.getString(r, c));
  //   }
}

function draw() {
  background(235,228,223);
  noStroke();
  // stroke(250,0,0);
  // strokeWeight(1);
  textSize(24);
  textFont(myFont2);
  text("How political decisions affected the pandemic in Israel?", windowWidth / 2 - 50, 100);
  
  

  drawLines();
  // drawEllipses();
  noStroke();
  textSize(10);
  
  drawText();
  stroke(0);
  val = slider.value();
  // stroke(204, 0, 0);
  textSize(20);
  textFont(myFont);
  textAlign(CENTER);
  text(events.getString(val, 1), windowWidth / 2 , 350);
  textSize(16);
  // line(50,windowHeight/2,windowWidth-50,windowHeight/2);
  // ellipse(50,windowHeight/2,20);
  // ellipse(windowWidth-50,windowHeight/2,20);

}



function drawEllipses() {
  noStroke();
  for (let i = 0; i < arrayNOC.length; i++) {
    let x = i * (width / (numPts - 1));
    let y = arrayNOC[i] + 530;
    // ellipse(x, y, 7);
  }
}

function drawLines() {
  stroke(3);
  // draw lines
  let px = 0;
  let py = arrayNOC[0];
  for (let i = 0; i < arrayNOC.length; i++) {
    let x = i * (width / (numPts - 1));
    let y = arrayNOC[i] + 530;
    line(px, py, x, y);

    //store the last position
    px = x;
    py = y;
  }
}


function drawText() {
  noStroke();
  // draw text on line

  for (let i = 0; i < events.getRowCount(); i++) {
    let x = i * (width / (events.getRowCount() - 1));
    let y = windowHeight / 2 - 10;
    text(events.getString(i, 0).split("/2020")[0], x+20, y);


  }
}