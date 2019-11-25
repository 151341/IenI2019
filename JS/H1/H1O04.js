function setup() {
  canvas = createCanvas(450,450);
  background('cornflowerblue');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  // teken de grond

  noStroke();
  fill('wheat');
  rect(0,350,450,100);
  // teken het huis

  strokeWeight(5);
  stroke('darkgrey');
  fill('lightgray');
  rect(100,280,100,100);

  noStroke();
  fill('gray');
  rect(120,330,30,50);

  strokeWeight(5);
  stroke('darkgray');
  fill('gray');
  triangle(100,275,150,200,200,275);
  // VERVANG DEZE REGEL door een regel die het dak tekent
  // teken de deur

  // PAS ONDERSTAANDE REGEL AAN zodat de deur op de juiste plaats staat
 noStroke();
 fill('yellow');
 ellipse(360,100,150);
  // teken de maan
  fill('khaki');
  // VERVANG DEZE REGEL door een regel die de maan tekent met een diameter van 150 en 25 vanaf de rand
  // teken de boom
  noStroke();
  fill('sienna');
  rect(300,250,40,130);

  noStroke();
  fill('olive');
  ellipse(320,180,130,180);
  // VERVANG DEZE REGEL door een regel die het groen van de boom tekent met behulp van ellipse
  // Als je een cirkel wilt tekenen met diameter 300 kun je ellipse(0,0,300) gebruiken.
  // Als je een ellipse wilt maken met breedte 300 en hoogte 500, dan moet je een parameter toevoegen: ellipse(0,0,300,500).
}
