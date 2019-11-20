function setup() {
  canvas = createCanvas(450,450);
  background('darkred');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  noStroke();
  fill('pink');
  triangle(450,0,0,225,450,450);
  
  fill('purple');
  triangle(0,450,0,0,450,225);
}
