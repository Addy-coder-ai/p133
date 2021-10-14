img = "";
Status = "";
objects= [];

function preload(){
  img = loadImage('coco.jpeg');
}


function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
  console.log("Model Loaded!")
  Status = true;
  objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
  objects = results;
}


function draw() {
  image(img, 0, 0,300,300);
}


function back(){
  window.location="index.html";
}