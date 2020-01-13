function setup() {
  canvas = createCanvas(850,450);
  background('grey');
  canvas.parent('processing');

}

function draw() {
    background('orange');
  if (mouseX >= width/2) {
    fill('blue');
  }
  else {
fill('purple')
    }
 rect(mouseX,mouseY,50,50);
 
 mouseX = constrain(mouseX,0,800);
 mouseY = constrain(mouseY,0,400);

 translate(mouseX,mouseY);
}
