var getal = 5;

function setup() {
  canvas = createCanvas(850,450);
  background('darkred');
  canvas.parent('processing');
  
}



function draw() {
  background('yellow');
text('aantal =' + getal,10,20);


for (var n = 0;n <= getal;n++) {
rel(n);
translate(100,0);

   if (keyIsDown(RIGHT_ARROW)){
    getal++;
   }

  if (keyIsDown(LEFT_ARROW) && getal > 0){
    getal--;
    }
  }
}



function rel(x) {
    fill('red');
    ellipse(50,150,90);
}
