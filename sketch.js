var myMap;
var canvas;
var mappa = new Mappa('MapboxGL', "pk.eyJ1IjoiYW5kcmVhYmVuZWRldHRpIiwiYSI6ImNqNWh2eGh3ejFqOG8zM3BrZjRucGZkOGEifQ.SmdBpUoSe3s0tm-OTDFY9Q");


var homeLat = 43.6;
var homeLon = -79.5;

var options = {
  lat: homeLat,
  lng: homeLon,
  zoom: 5,
  style: "mapbox://styles/mapbox/satellite-v9"
}

var myLat;
var myLon;
var position;

function preload() {
  position = getCurrentPosition();
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
  myLat = position.latitude;
  myLon = position.longitude;
}

function draw() {
  clear();

  var home = myMap.latLngToPixel(homeLat, homeLon);
  fill("white");
  noStroke();
  ellipse(home.x, home.y, 20);

  var myPosition = myMap.latLngToPixel(myLat, myLon);
  fill("white");
  noStroke();
  ellipse(myPosition.x, myPosition.y, 20);

  var distance = dist(homeLat, homeLon, myLat, myLon);
  text('The distance between you and toronto = '+int(1000*distance)+'m',width/2,60);
  
  push();
  stroke("white");
  strokeWeight(2);
  fill("white");
  line(home.x, home.y, myPosition.x, myPosition.y);
  pop();


  push();
  fill("white");
  noStroke();
  textFont("Roboto");
  textAlign(CENTER, CENTER);
  textSize(18);
  text("Toronto", home.x, home.y - 20);
  pop();

  push();
  fill("red");
  noStroke();
  textFont("Roboto");
  textAlign(CENTER, CENTER);
  textSize(18);
  text("Your current location", myPosition.x, myPosition.y - 20);
  pop();








}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
