noseY = 0;
noseX = 0;
function preload()
{
clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png'); 
}
 
function setup()
{
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300)
video.hide();

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose' , gotPosses);
}

function modelLoaded(){
    console.log('Posenet is initialized')
}


function draw()
{
    image(video,0,0,300,300);
    fill(0,100,100)
    stroke(0,100,100)
    circle(noseX,noseY,20);
    image(clown_nose,noseX - 15,noseY - 15,30,30);
}
function take_snapshot()
{
 save('myFilterImage.png');
}
function gotPosses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        noseY = results[0].pose.nose.y;
        noseX = results[0].pose.nose.x;
        console.log("nose x =" + noseX);
        console.log("nose y =" + noseY);
    }
}