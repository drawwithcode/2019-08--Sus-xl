var myMap;
var canvas;
var mappa = new Mappa("Leaflet");
var options = {
  lat: 0,
  lng: 0,
  zoom: 4,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}


function setup() {
  canvas = createCanvas(windowWidth,windowHeight);

  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
}

function draw() {
  var polimi = myMap.latLngtoPixel(poliLat,poliLon);
  ellipse(polimi.x, polimi.y, 30);
}
