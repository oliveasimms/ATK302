var weather;
var temp = 0;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var desc ;
var ws = 0 ;
var x = 0 ;
var humidity = 0;
var y = 0






function setup() {
  createCanvas(400, 400);

  // HERE Is the call to get the weather. PLEASE PUT YOUR OWN ID IN HERE!!!
  // MINE WILL STOP WORKING IF EVERYONE USES IT!!!

  var myJSONString = 'http://api.openweathermap.org/data/2.5/weather?zip=61701,us&units=imperial&';
  var myIDString = 'appid=4c897d91e01b3d6bda0d9e38c9f43de3'; // ADD YOUR ID!!!
  loadJSON(myJSONString + myIDString, gotData); // look - that gotData function happens when JSON comes back.


}


function gotData(data) {
  //  console.log(data);
  weather = data;
  console.log(data); // for debugging purposes
}


function draw() {

  switch (myState) {
    case 0:
      if (weather) {
        ellipse(100, 100, 80, 80);
          myState = 1;
      }

      break;

    case 1:
    background(100) ;
    background(39, 111, 178) ;
    fill(102, 204, 255) ;
    desc = weather.weather[0].description ;
    ws = weather.wind.speed ;
    text("Weather outside is " + desc, 30, 30) ;
    text("Wind speed is " + ws, 30, 80) ;
    ellipse(x, 130, 50, 50) ;
    x = x + ws/3 ;
    temp = weather.main.temp ;
    text("Temperature outside is " + weather.main.temp, 10, 180) ;
    humidity = weather.main.humidity ;
    text("Humidity outside is " + weather.main.humidity, 10, 300) ;

    fill(255, 153, 51) ;
  ellipse(y, 400, 50, 50) ;
  y = y + temp/7 ;



      break;


  }
}
