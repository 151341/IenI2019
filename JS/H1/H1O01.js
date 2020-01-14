var blokX;
var blokY;

function setup() {
  canvas = createCanvas(850,450);
  background('grey');
  canvas.parent('processing');

}

function draw() {
  if (blokX >= width/2) {
   background('red');
  }
  else {
    background('blue');
  }

    blokX = mouseX;
    blokY = mouseY;
    text('blokX ='+ round(blokX) + 'blokY ='+ round(blokY),20,20);
 blokX = constrain(mouseX,0,800);
 blokY = constrain(mouseY,0,400);


  if (blokX >= width/2) {
    fill('blue');
  }
  else {
fill('red')
    }
 rect(blokX,blokY,50,50);
}
