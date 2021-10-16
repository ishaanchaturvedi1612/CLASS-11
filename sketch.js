var path, pathimg;
var boy, boy_running; 
var leftBoundry, rightBoundry;
function preload(){
  //pre-load images
  pathimg = loadImage("path.png");
  boy_running = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathimg);
  path.velocityY = 4;
  path.scale = 1.2;
  boy = createSprite(210,100)
  boy.addAnimation("running", boy_running);
  boy.scale = .10;
  leftBoundry = createSprite(5,200, 10,400);
  leftBoundry.visible=false;
  rightBoundry = createSprite(400,200,10,400);
  rightBoundry.visible=false;
}

function draw() {
  background(0);
  drawSprites();
  if(path.y > 400 ){
    path.y = height/4;
  }
   
  boy.x=World.mouseX;
  boy.collide(rightBoundry);
  boy.collide(leftBoundry);
}
