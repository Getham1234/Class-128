amazing_grace = ""
oh_when_the_saints = ""
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
function preload(){
    amazing_grace = loadSound("2a Amazing Grace (Demo).mp3");
    oh_when_the_saints = loadSound("3a Oh When the Saints (Demo).mp3");
}

function setup(){
    canvas = createCanvas(600, 500)
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("Posenet was Initialized.");
}

function draw(){
image(video, 0, 0, 600, 500);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log(leftWristX, leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log(rightWristX, rightWristY);
    }
}