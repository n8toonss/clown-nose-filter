nosex = 0;
nosey = 0;
function preload(){
 img = loadImage("https://i.postimg.cc/wvJqT8dv/clownnose.png");
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
   video = createCapture(VIDEO);
   video.size(300,300);
   poseNet = ml5.poseNet(video,modelLoaded);
   poseNet.on("pose",gotPoses);
   video.hide();
}
function takesnapshot(){
    save("photo.png");
}
function draw(){
    image(video,0,0,300,300);
    //fill(255,0,0);
    //stroke(0,0,255);
    image(img,nosex-18,nosey-18,45,45);
}
function modelLoaded(){
    console.log("poseNet has been successfully loaded");
}
function gotPoses(results){
  if(results.length > 0 ){
     //if results array is not empty;
     //this enhances ux as this is gonna notify about real time error
    console.log(results);
      console.log("nose x:"+results[0].pose.nose.x);
      console.log("nose y:"+results[0].pose.nose.y);
      nosex = results[0].pose.nose.x;
      nosey = results[0].pose.nose.y;
    }
    
}