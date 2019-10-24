var song1;

function preload() {
  song1 = loadSound('assets/sublimebadfish.mp3') ;
  // put setup code here
}

function setup() {

  createCanvas(720, 200);
  background(255, 153, 51);
  song1.play();

}

function draw() {


}

function mouseReleased() {
  song1.stop();
}
