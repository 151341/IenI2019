var d = 15;
var rondX;
var rondY;

function setup() {
  canvas = createCanvas(450,450);
  canvas.parent('processing');
  textFont("Verdana");
  textSize(14);
  noStroke();
  //noLoop();
  background('lavender');
  frameRate(90);

}

function draw() {
  fill('purple'); 
  rect(0,0,width,30)

  fill('black')
  text("mouseX:" + round(rondX) + " mouseY:"+ round(rondY),10,20);

  fill('indianred');
  ellipse(rondX,rondY,d)
  d++;
  rondX = constrain(mouseX,75,375);
  rondY = constrain(mouseY,75,375);
}
