var score =0 ;

function setup() {
  // put setup code here
  createCanvas(800, 500);
  textAlign(CENTER) ;
}

function draw() {
  // put drawing code here
rect(mouseX, mouseY, 10, 10) ;
textSize (100);
text(score, 40, 200);
}

function mouseReleased (){
  background(random(255), random(255), random(255));
  score++ ;
}
