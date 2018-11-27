var myLoc;

var connyLat=45.5038796;
var connyLog=9.1639508;

var poloSudLat= 39.8286879;
var poloSudLog= -71.8319291;

var pingu;
var ibm;

var myMap;
var canvas;

var mappa = new Mappa('Leaflet');

var options= {
  lat: connyLat,
  lng: connyLog,
  zoom : 12,
  style:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
}

function preload(){
  // put preload code here

  myLoc = getCurrentPosition();
  pingu = loadImage('./assets/pingu.png');
  ibm = loadFont('IBMPlexSans-BoldItalic.ttf');

}

function setup() {
  // put setup code here
  //createCanvas(windowWidth,windowHeight);
  //background(200);
  console.log(myLoc);

  canvas = createCanvas(windowWidth, windowHeight);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
  myLocLat= myLoc.latitude;
  myLocLog = myLoc.longitude;
  frameRate(9);

  // var distance = calcGeoDistance(myLoc.latitude, myLoc.longitude, poloSudLat, poloSudLog);
  // console.log(distance);





}



function draw() {
  // put drawing code here
  var distance = calcGeoDistance(myLoc.latitude, myLoc.longitude, poloSudLat, poloSudLog);

  var quantoTiManca= distance

  clear();

  var placePingu = myMap.latLngToPixel(myLocLat, myLocLog);
  image(pingu, placePingu.x, placePingu.y, 100, 100);
  var placePinguHome = myMap.latLngToPixel(poloSudLat, poloSudLog);
  image(pingu, placePinguHome.x, placePinguHome.y, 100, 100);

  fill(random(255),random(255),random(255));
  textSize(20);
  textFont(ibm);
  textAlign(CENTER);
  push();
  translate(50,0);
  text('You are pretty far from your home', placePingu.x, placePingu.y+120);
  text('Start walking dude!', placePingu.x, placePingu.y+140);
  text(quantoTiManca+'km', placePingu.x, placePingu.y+160);
  pop();

}
