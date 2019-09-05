//Backstory: My video game characters name is Balb.
//It starts off as a friend of yours, or just a normal guy,
//but then turns to the dark side and tries to defeat you.
//Its powers/abilities is bouncing around and shooting lasers out of its spikes.

function setup() {
  // put setup code here
  createCanvas(800, 800) ;
}

let value = 0;
function draw() {
  // put drawing code here
  if(mouseIsPressed){
    background('#cc0000');
  }
  else{
  background('#ccffff') ;
}

  //character head
    if (mouseIsPressed) {
      stroke('black');
      fill('#ff0066') ; //hot pink

    }
      else {
        stroke('black');
        fill('#fae') ;
    }

  ellipse(width / 2, 300, 200, 200) ;

//mouth
if (mouseIsPressed) {
  fill('white')
  line(409, 358, 443, 348);
  line(409, 358, 436, 369);
  line(436, 369, 443, 348);
}
else{
  stroke('black');
fill('black');
line(352, 324, 442, 328);
}

//lasers
if (mouseIsPressed){
  stroke('#00ff00')
  line( 197, 385, 199, 388);
line(182, 393, 171, 401);
line(154, 414, 141, 422);
line(108, 441, 89, 454);
line(336, 477, 327, 505);
line(325, 523, 319, 541);
line(311, 564, 310, 580);
line(469, 470, 477, 491);
line(485, 513, 493, 535);
line(504, 556, 510, 577);
line( 573, 361, 598, 369)
line(613, 373, 642, 379);
line(661, 385, 693, 393);
line(716, 401, 745, 408);
}

//fire
if (mouseIsPressed){
  stroke('#ff3300')
  fill('#ff3300')
  triangle(2, 798, 96, 578, 176, 799);
triangle(147, 790, 206, 668, 266, 799);
triangle(165, 802, 312, 666, 443, 802);
triangle(409, 790, 452, 708, 496, 800);
triangle(429, 791, 553, 649, 648, 797);
triangle(607, 786, 731, 483, 798, 794);
}

//legs
  if(mouseIsPressed) {
    stroke('black');
    fill('black') ;
    triangle(335, 370, 386, 386, 335, 473) ;
    triangle(413, 386, 461, 368, 462, 452) ;
    triangle(471, 349, 488, 306, 562, 360) ;
    triangle(323, 349, 311, 314, 572, 228) ;
    triangle(309, 290, 316, 263, 496, 137) ;
    triangle(476, 255, 487, 280, 360, 101) ;
    triangle(327, 247, 351, 228, 255, 158) ;
    triangle(367, 218, 404, 213, 201, 245) ;
    triangle(424, 218, 460, 240, 211, 381) ;
  }
  else {

fill('#00e6ac') ;
stroke('black');
triangle(335, 370, 386, 386, 350, 420) ;
triangle(413, 386, 461, 368, 450, 417) ;
triangle(471, 349, 488, 306, 511, 346) ;
triangle(323, 349, 311, 314, 282, 352) ;
triangle(309, 290, 316, 263, 276, 261) ;
triangle(476, 255, 487, 280, 517, 251) ;
triangle(327, 247, 351, 228, 308, 207) ;
triangle(367, 218, 404, 213, 373, 167) ;
triangle(424, 218, 460, 240, 461, 183) ;
}

//eyes
if(mouseIsPressed) {
  stroke('black');
  fill(0);
  ellipse(394, 341, 30, 30);
  ellipse(453, 329, 30, 30);
}
else{
stroke('black');
fill(0)
ellipse(367, 261, 30, 30) ;
ellipse(425, 257, 30, 30) ;
}

//pupils
if (mouseIsPressed) {
  stroke('black');
  fill(0, 255, 0);
  ellipse(384, 345, 10, 10);
  ellipse(441, 334, 10, 10);
}
else {
  stroke('black');
fill(255);
ellipse(358, 262, 10, 10) ;
ellipse(417, 259, 10, 10) ;
}
}
