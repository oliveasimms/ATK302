var X = 0 ;


function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 800);

}


function draw() {
  background('#3890CE');
  noStroke();

//animation


fill('white');
ellipse(X, 300, X, 100);
X = X + 1 ;
if (X > 800) X = 0 ;

  fill(112, 58, 17);
rect(79,541,138,543);

fill(17, 112, 25);
triangle(146,362,25,557,250,549);

  fill(255, 247, 0);
  ellipse(500, 144, 200, 200);

fill(255) ;
text(mouseX + ',' + mouseY, 20, 20) ;
}

function mouseReleased () {
 console.log(mouseX + ',' + mouseY) ;

}
