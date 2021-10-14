img = "";
Status = "";
objects= [];

function preload(){
  img = loadImage('me.jpeg');
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
  if(Status != ""){
    for(i = 0; i < objects.length; i++){
        document.getElementById("status").innerHTML = "Status: Object Detected";
        fill("#FF0000");
        percentage = floor(objects[i].confidence * 100);
        text(objects[i].label+ " " + percentage + "%", objects[i].x + 15, objects[i].y + 15);
        noFill();
        stroke("#FF0000");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
}
}


function back(){
  window.location="index.html";
}