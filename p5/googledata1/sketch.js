var namesArray = [];

function setup() {

//https://docs.google.com/spreadsheets/d/1m2oJecw6j2rCbAbcF5-PsTiVQhNN2cuCyBBrJ_Vwqnk/edit#gid=2041568918
//https://docs.google.com/forms/d/1W5f2BnekoWa3XfDuFt7IAnx8DLB_Qg5iryeLbXQTmeA/edit
  // Tabletop stuff, for getting google spreadsheet data in.

  let url = '1ex4gPrbO6a-7MLcyUhe4UeOToxmbJriTVz5AoUEn_BE' ;


  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff

  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console
  console.log(data.length);
  // iterate through the array of data and create an object and push it on an array called namesArray
//for(let i = 0 ; i < data.length ; i++){
//  namesArray.push(new Circle(data[0].Name, data[0].Shape)) ;

//}

  for (let i = 0; i < data.length; i++) {
    namesArray.push(new Circle(data[i]['Do you prefer regular cheetos or hot cheetos?'])) ;
    }

}


function draw() {
  background('black');

  // // iterate through the namesArray and display the objects!
  // for (let i = 0 ; i < namesArray.length ; i++) {
  //   namesArray[i].display() ;
  // }
for (let i = 0; i < namesArray.length; i ++) {
  namesArray[i].display() ;
  namesArray[i].drive();
}

}


// my circle class
function Circle(myName, myShape) {
  this.pos = createVector(random(width), random(height));
  this.name = myName;
  this.shape = myShape;


  this.display = function() {
    if (this.name == 'HOT') {fill ('red');} else {fill ('purple');}


    ellipse(this.pos.x, this.pos.y, 100, 100);
    fill('black') ;
    text(this.name, this.pos.x, this.pos.y) ;

    this.drive = function () {
  this.x = this.x + 5;
  if (this.x > width) {
    this.x = 0;
  }
}
}

}
