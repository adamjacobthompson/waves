var response;
var lines;
var entirenovel;
var individualwords;
var waves;
var f;

function preload() {
  response = loadJSON('https://www.worldtides.info/api?heights&lat=50.839&lon=0.031&key=7a5da102-325e-44e3-affa-dcadc5e4f5f4');
    
  lines = loadStrings("thewaves.txt");
    
  f = loadFont('Arial.ttf');
    
}

function setup() {
    createCanvas(800,600);
    frameRate(30);
    var number = response.heights[0].height;
    var mapnumber = map(number, -3.0, 3.0, 1, 5);
    
    entirenovel = join(lines, " ");
    individualwords = splitTokens(entirenovel, " -'.!;?,");
    
    
    
    waves = Array(100);
    
    print("waves array size is " + waves.length);
    print("Individual words array size is " + individualwords.length);
    print("Mapped tide is " + mapnumber);
    print("Actual tide is " + number);
    print(individualwords);
    //print(index);
    
    for (var i = 0; i < waves.length; i++) {
        waves[i] = new Waves(random(-100, width+100), random(150, height-150), random(1, 25), random(-.5, mapnumber), random(-.075, .075), random(1, 200), random(-1.75, 1.75)); // PROBLEM
  }
}

function draw() {
    background(0);
    
    for (var i = 0; i < waves.length; i++) {
    waves[i].move();
    waves[i].display(); // ALSO PROBLEM?
    waves[i].sink();
    }
}