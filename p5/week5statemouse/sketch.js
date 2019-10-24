function draw() {
  // put setup code here
  switch (myState) {
    case 0:
    background(255, 0, 0);
    text("first state", 100, 100);
    break;

    case 1:
    bavkground(0, 255, 0);
    break ;

    case 2:
    background(0, 0, 255) ;
    break;

  }
}

function mouseReleased() {
  // put drawing code here
  myState++ ;
  if (myState > 2){
  myState = 0 ;
}
}
