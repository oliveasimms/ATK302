var cars = [];
var frogPos;
var myState = 0;
var timer = 0;
var joaquin, joaquinright, joaquinleft;
var slimey;
var cig;
var youlostjokerPic;
var cigcasePic;
var jokerstartPic;
var song1;



function preload(){
song1 = loadSound('assets/WhiteRoom.mp3');

}
function setup() {
  createCanvas(800, 600);
song1.play();



  //spawn cars
  for (var i = 0; i < 5; i++) {
    cars.push(new Car());
  }

  joaquinright = loadImage("assets/joaquinright.png");
  joaquinleft = loadImage("assets/joaquinleft.png");
  joaquin = joaquinright;
  slimey = loadFont('assets/slimey.ttf');
  cig = loadImage('assets/cig.png');
  youlostjokerPic = loadImage('assets/youlostjoker.png');
  cigcasePic = loadImage('assets/cigcase.png');
  jokerstartPic = loadImage('assets/jokerstart.png');
  frogPos = createVector(width / 2, height - 80);
}

function draw() {
  switch (myState) {


    case 0:
      background('#279638');
      textFont(slimey);
      text("welcome, click to play", 300, 300);
      textSize(35);
      image(jokerstartPic, 0 , 0);
      break;

    case 1:

      game(); //this should be in case 1 of a switch/case statement

      timer++;
      if (timer > 600) {
        timer = 0;
        myState = 2;

      }

      break;

    case 2:
      background('#a14fff');
      textFont(slimey);
      textSize(80);
      fill('black');
      text("you lose!", 300, 300);
      image(youlostjokerPic, 450, 375);
      image(cigcasePic, 0, 0);
      break;

    case 3:
      background('#f5b942');
      textFont(slimey);
      textSize(80);
      fill('black');
      text("you win!", 100, 100);
      break;

  }
}

function mouseReleased() {

  switch (myState) {
    case 0:
      myState = 1;
      break;

    case 2: //this was lose state
      resetTheGame();
      myState = 0;
  

      break;

    case 3:
      resetTheGame();
      myState = 0;
      break;

  }
}

function resetTheGame() {
  //spawn the cars
  cars = [];
  for (var i = 0; i < 5; i++) {
    cars.push(new Car());
  }
  timer = 0;

}




function Car() {
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);

  this.display = function() {
    fill(this.r, this.g, this.b);
    //  rect(this.pos.x, this.pos.y, 100, 50);
    image(cig, this.pos.x, this.pos.y, 100, 100);
  }

  this.drive = function() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;


  }
}


function keyPressed() {
  if (keyCode === LEFT_ARROW) joaquin = joaquinleft;
  if (keyCode === RIGHT_ARROW) joaquin = joaquinright;

}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 5;

  //loop the frog around the screen
  if (frogPos.x > width) frogPos.x = 0;
  if (frogPos.x < length) frogPos.x = 0;
  if (frogPos.y > width) frogPos.y = 0;
  if (frogPos.y < length) frogPos.y = 0;

}

function game() {
  background(100);
  background('#820505')
  // iterate through the cars array
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();

    //test if this car is close to the frog
    if (cars[i].pos.dist(frogPos) < 20) {
      cars.splice(i, 1);

    }
  }

  if (cars.length == 0) {
    timer = 0;
    myState = 3; //they won
  }

  //draw the frog
  fill('green');
  //ellipse(frogPos.x, frogPos.y, 50, 50);
  image(joaquin, frogPos.x, frogPos.y);
  checkForKeys();

}
