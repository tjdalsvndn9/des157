
var angle = 0;
var rectHeight=1000;
var diff=5;

function setup() {
  var myCanvas =   createCanvas(800,250);
  myCanvas.parent('banner');
  noStroke();
  rectMode(CENTER);
  //frameRate(60);
}

function windowResized() {
  resizeCanvas(800, 250);
}

function draw() {
  background(255);
  blendMode(MULTIPLY);

  push();
  
  translate(width/2, height/2);

  firstrect();
  secondrect();
  thirdrect();
  fourthrect();
  fifthrect();
  sixthrect();
  seventhrect();
  eightrect();
  ninethrect();
  thenthrect();

  pop();

  blendMode(NORMAL);

  angle = angle + 0.0001;

  if(rectHeight > 1000 || rectHeight < 180){
    diff*=-1;
  }

  rectHeight = rectHeight+diff;
}

function firstrect() {
    rotate(degrees(angle));
  rect(110, 0, 150, rectHeight);
}

function secondrect() {
  //translate(width/8, height/8);
  rotate(degrees(angle));
  fill(92, 178, 157);
  rect(110, 0, 150, rectHeight);
}
function thirdrect() {
  //translate(width/16, height/16);
  rotate(degrees(angle));
  fill(239, 201, 76);
  rect(110, 0, 150, rectHeight);
}

function fourthrect() {
  //translate(width/32, height/32);
  rotate(degrees(angle));
  fill(226, 122, 63);
  rect(110, 0, 150, rectHeight);
}

function fifthrect() {
  //translate(width/64, height/64);
  rotate(degrees(angle));
  fill(223, 73, 73);
  rect(110, 0, 150, rectHeight);
}

function sixthrect() {
  //translate(width/6, height/6);
  rotate(degrees(angle));
  fill(51, 77, 92);
  rect(110, 0, 150, rectHeight);
}

function seventhrect() {
  //translate(width/8, height/8);
  rotate(degrees(angle));
  fill(92, 178, 157);
  rect(110, 0, 150, rectHeight);
}
function eightrect() {
  //translate(width/16, height/16);
  rotate(degrees(angle));
  fill(239, 201, 76);
  rect(110, 0, 150, rectHeight);
}

function ninethrect() {
  //translate(width/32, height/32);
  rotate(degrees(angle));
  fill(226, 122, 63);
  rect(110, 0, 150, rectHeight);
}

function thenthrect() {
  //translate(width/64, height/64);
  rotate(degrees(angle));
  fill(223, 73, 73);
  rect(110, 0, 150, rectHeight);
}

