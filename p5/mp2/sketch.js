var myState = 0;
var myTimer = 0;
var firstbackgroundPic;
var YOUWONPic;
var YOULOSTPic;
var runningoutPic;
var justkiddingPic;
var hotcheetoPic;


function setup() {
  // put setup code here
  createCanvas(2000, 2000);
  firstbackgroundPic = loadImage("assets/firstbackground.jpg");
  YOUWONPic = loadImage("assets/YOUWON.jpg");
  YOULOSTPic = loadImage("assets/YOULOST.jpg");
  runningoutPic = loadImage("assets/runningout.jpg");
  justkiddingPic = loadImage("assets/justkidding.jpg");
  hotcheetoPic = loadImage("assets/hotcheeto.jpg");
}

function draw() {


  switch (myState) {

    case 0:
      image(firstbackgroundPic, 0, 0);
      //  text('This is the splash screen', 100, 100);

      break;

    case 1:
      image(runningoutPic, 0, 0);
      //  text('This is the game-playing screen', 100, 100);
  

      // increment a timer up to 300
      myTimer++;
      // when it gets > 300, go to the next myState
      if (myTimer > 300) {
        myState = 2;
        myTimer = 0;
      }
      text(myTimer, 30, 30);

      break;

    case 2:
      image(YOUWONPic, 0, 0);
      //  text('Yay! You Won!!!', 100, 100);
      break;


    case 3:
      image(justkiddingPic, 0, 0);
      break;

    case 4:
      image(YOULOSTPic, 0, 0);
      break;
  }

  //  fill('white');
  //  text('the score is ', 100, 700);

}



function mouseReleased() {
  // myState++ ;
  // // if myState got bigger than 2 then make myState = 0 again
  // if (myState > 2) {
  //   myState = 0  ;
  // }

  switch (myState) {
    case 0:
      myState = 1;
      break;

    case 1: // game playing, don't let them go to next state!
      break;

    case 2:
      myState = 3;
      break;

    case 3:
      myState = 4;
      break;

    case 4:
      myState = 5;
      break;



  }


}
