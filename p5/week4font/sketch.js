var slimey;
var x = 0;


function setup() {
  // put setup code here
  createCanvas (800, 800);
  slimey = loadFont ('assets/slimey.ttf');
}

function draw() {
  // put drawing code here
  background('white');

  textFont(slimey) ;

  fill('#cc66ff');
  text("Hello World", x, 150);
  x++ ;
  if (x > width) {
    x = 0;
  }
  textSize(30);
  text("from olivea", 20, 250);

}
