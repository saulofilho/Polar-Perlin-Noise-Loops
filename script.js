var radiusX;
var radiusY;
var style;
var words = ['epilepsy', 'warning'];
var index = 0;
var textSize;

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('myContainer');
  texto = createSlider(1, 300, 1, 0.01);
  texto.parent('myInputs');
  radiusX = createSlider(0, 1000, 0, 0.1);
  radiusX.parent('myInputs');
  radiusY = createSlider(0, 1000, 0, 0.1);
  radiusY.parent('myInputs');
  style = createSlider(0.01, 4, 0.01, 0.01);
  style.parent('myInputs');
}

function draw() {

  var textS = texto.value();
  var rX = radiusX.value();
  var rY = radiusY.value();
  var sty = style.value();
  
  background(random(255), random(255), random(255));
//  background(0);
  translate(width/2, height/2);
  stroke(random(255), random(255), random(255));
  fill(random(255), random(255), random(255));
  
  beginShape();
  for (let a = 0; a < TWO_PI; a += sty) {
    let r = random(rX, rY);
  	let x = r * cos(a);
  	let y = r * sin(a);
    vertex(x, y);
  }
  endShape();

  beginShape();
  for (let a = 0; a < TWO_PI; a += sty) {
    let r = random(rX, rY);
  	let x = r * cos(a);
  	let y = r * sin(a);
    vertex(x, y);
  }
  endShape();

  beginShape();
  for (let a = 0; a < TWO_PI; a += sty) {
    let r = random(rX, rY);
  	let x = r * cos(a);
  	let y = r * sin(a);
    vertex(x, y);
  }
  endShape();

if(mouseIsPressed) {
  textAlign(CENTER);
  fill(random(255), random(255), random(255));
  noStroke();
  textSize(textS);
  text(words[index], 0, 0);
  index++;
}

  
  if (index > 10) {
    index = 0;
  }

}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}


$(document).ready(function() {
  $("button").click(function() {
    $("span").toggle();
  })

})

/*
$('botaoId').on('click', function(e) {
  $('botaoId')
    .parent()
    .find(' >.well')
    .toggle()
    .find('input')
    .slider('relayout');
    e.preventDefault();
})
*/