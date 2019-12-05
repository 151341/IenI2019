function setup() {
  canvas = createCanvas(500,500);
  background('silver');
  canvas.parent('processing');
  //noLoop();
}

function draw() {
  noStroke();
  fill('steelblue');
  rect(150,150,200,200);
  fill('deepskyblue');

}