img = "";
rightWristX = 0;
rightWristY = 0;



function preload()
{
  img = loadImage();
}

function setup() {
  createCanvas(650, 400);
  video=createCapture(VIDEO);
  video.size(650,400);
  poseNet=ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded(){
  console.log("Model has been loaded!");
}



function draw() {
  
  image(video, 0,0, 650, 400);
 
}


