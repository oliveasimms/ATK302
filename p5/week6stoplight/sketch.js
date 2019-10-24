var myState = 0;
var timer = 0;
var x = 0;
var velocity = 0;
var vel = 3;

function setup() {
  // put set up code here
  createCanvas(800, 800);
rectMode(CENTER) ;
ellipseMode(CENTER);

}

function draw(){
  // put drawing code here
  background(200);


  switch(myState){
    case 0: //red light
    fill('grey');
    rect(width/2, height/ 2, 150, 400);
    fill('grey');
    ellipse(width/2, height/2, 100, 100);
    fill('red');
    ellipse(width/2, height/2-120, 100, 100);
    fill('grey');
    ellipse(width/2, height/2+120, 100, 100);
    break;

    case 1: //green light
    fill('grey');
    rect(width/2, height/ 2, 150, 400);
    fill('grey');
    ellipse(width/2, height/2, 100, 100);
    fill('grey');
    ellipse(width/2, height/2-120, 100, 100);
    fill('green');
    ellipse(width/2, height/2+120, 100, 100);
    break;

    case 2: //yellow light
    fill('grey');
    rect(width/2, height/ 2, 150, 400);
    fill('yellow');
    ellipse(width/2, height/2, 100, 100);
    fill('grey');
    ellipse(width/2, height/2-120, 100, 100);
    fill('grey');
    ellipse(width/2, height/2+120, 100, 100);
    break;

    case 3: // red light
    fill('grey');
    rect(width/2, height/ 2, 150, 400);
    fill('grey');
    ellipse(width/2, height/2, 100, 100);
    fill('red');
    ellipse(width/2, height/2-120, 100, 100);
    fill('grey');
    ellipse(width/2, height/2+120, 100, 100);

  }





//car
//x = x + velocity ;
//if (x > width) {

//}
fill('purple');
rect(10, height-100, 80, 50);
x = x + vel ;
if(x > width) {
  x = 0;
}


//rect(width/2, height/ 2, 150, 400);
// ellipse(width/2, height/2, 100, 100);
// ellipse(width/2, height/2-120, 100, 100);
// ellipse(width/2, height/2+120, 100, 100);

// put the car here


timer ++;
if(timer > 200) {
  timer = 0;
  myState++ ;
  if(myState > 2) {
    myState = 0 ;

  }
}
}
