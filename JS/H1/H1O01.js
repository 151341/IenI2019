function setup() {
  canvas = createCanvas(450,450);
  background('grey');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  // groene cirkel zonder rand
  
  fill('green');
  ellipse(225,225,425);
  fill('white');
 
  
  // witte rechthoek met rode rand
  
  stroke('red');
  fill('white');
  strokeWeight(10);
  rect(650,100,250,300);  
}
