var xJager = 50;
var yJager = 50;
var xProoi = 800;
var yProoi = 175;

function setup() {
  canvas = createCanvas(1000,400);
  canvas.parent('processing');
  textFont("Verdana");
  textSize(140);
  noStroke();
  frameRate(50);
  textSize(19);
}

function draw() {
  background('olive');

  if (keyIsDown(LEFT_ARROW)) {
    xJager -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xJager += 5;
  }
  if (keyIsDown(UP_ARROW)) {
    yJager -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yJager += 5;
  }
    if (keyIsDown(87)) {
    yProoi -= 8;
  }
    if (keyIsDown(83)) {
    yProoi += 8;
  }
    if (keyIsDown(68)) {
    xProoi += 8;
  }
    if (keyIsDown(65)) {
    xProoi -= 8;
  }

  text("xJager =" + round(xJager) + "/yJager =" + round(yJager) + "/xProoi =" + round(xProoi) + "/yProoi =" + round(yProoi),25,25);                                            

  xJager = constrain(xJager,0,width - 100);
  yJager = constrain(yJager,0,height - 100);
  xProoi = constrain(xProoi,0,width - 75);
  yProoi = constrain(yProoi,0,height - 50);

  if (xJager >= xProoi - 100 && xJager
     <= xProoi + 75 && yProoi >= yJager
      - 60 && yProoi <= yJager + 100) {
    fill('chartreuse');
  }
  else {
    fill('darkkhaki');
  }
  rect(xProoi,yProoi,75,50);
  fill('moccasin');
  rect(xJager,yJager,100,100);

    if (xJager >= xProoi - 100 && xJager
     <= xProoi + 75 && yProoi >= yJager
      - 60 && yProoi <= yJager + 100) {
          eindScherm();
      }
}

function eindScherm() {
  background('white');
  fill('black');
  text("GEVANGEN!",75,250);
  noLoop();
}