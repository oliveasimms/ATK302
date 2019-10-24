var myCar ;
var myCar1 ;


function setup() {
  createCanvas (800, 800) ;
  myCar = new Car () ;
  myCar1 = new Car () ;
}

function draw() {
background(100);

myCar.display() ;
myCar.drive();

myCar1.display();
myCar1.drive();
}

function Car () {
  this.x = random(width);
  this.y = random(height);

  this.vel = random(5);
  this.r = random(255) ;
  this.g = random(255) ;
  this.b = random(255) ;


  this.display = function () {
    fill(this.r, this.g, this.b);
    rect(this.x, this.y, 100, 50) ;
  }

  this.drive = function () {
this.x = this.x + 5;
if (this.x > width) {
  this.x = 0;
}
  }


}
