var cars = [];
var frogPos;
var myState = 0;
var timer = 0;
var yoda, yodaright, yodaleft;
var slimey;
var bird;
var birds = [];

function setup() {
  createCanvas(800, 600);

  birds[0] = loadImage('assets/bird1.png');
  birds[1] = loadImage('assets/bird2.png');
  birds[2] = loadImage('assets/bird3.png');


  rectMode(CENTER);
  imageMode(CENTER);
  ellipseMode(CENTER);


  //spawn cars
  for (var i = 0; i < 5; i++) {
    cars.push(new Car());
  }

  yodaright = loadImage("assets/yodaright.gif");
  yodaleft = loadImage("assets/yodaleft.gif");
  yoda = yodaright;
  slimey = loadFont('assets/slimey.ttf');
  bird = loadImage('assets/bird1.png');

  frogPos = createVector(width / 2, height - 80);
}

function draw() {
  switch (myState) {


    case 0:
      background('#70ff81');
      textFont(slimey);
      text("welcome, click to play", 100, 300);
      textSize(45);
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
      textSize(45);
      fill('black');
      text("lose!", 300, 300);
      break;

    case 3:
      background('black');
      text("win!", 100, 100);
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
  this.birdNum = 0;
  this.timer = 0;


  //methods
  this.display = function() {
    fill(this.r, this.g, this.b);
    //  rect(this.pos.x, this.pos.y, 100, 50);
    //  image(bird, this.pos.x, this.pos.y, 100, 100);
    image(birds[this.birdNum], this.pos.x, this.pos.y, 100, 100);

    this.timer = this.timer + 1;

    if (this.timer > 30) {
    this.birdNum = this.birdNum + 1;
    this.timer = 0;
    }

    if (this.birdNum > birds.length-1) this.birdNum = 0;
  }
}



this.drive = function() {
  this.pos.add(this.vel);
  if (this.pos.x > width) this.pos.x = 0;
  if (this.pos.x < 0) this.pos.x = width;
  if (this.pos.y > height) this.pos.y = 0;
  if (this.pos.y < 0) this.pos.y = height;


}



function keyPressed() {
  if (keyCode === LEFT_ARROW) yoda = yodaleft;
  if (keyCode === RIGHT_ARROW) yoda = yodaright;

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
  // iterate through the cars array
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();

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
  image(yoda, frogPos.x, frogPos.y);
  checkForKeys();

}
