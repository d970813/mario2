function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}
                                                                                                                             
function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	
	instializeInSetup(mario);

	video = createCapture(VIDEO);
    video.size(600, 300);
	video.parent("Game_consolePurple")

	poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}


function draw() {
	game()
}

function modelLoaded(){
	console.log('Im sleeply!!!');
}

function gotPoses(results){
	if(results.length > 0){
console.log(results);
		noseX=results[0].pose.nose.x;
		noseY=results[0].pose.nose.y;
		console.log("nose x ="+noseX+", nose y ="+noseY);                             
	}
}