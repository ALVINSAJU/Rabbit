var garden,rabbit;
var gardenImg,rabbitImg;
var apples,appleImg;
var leaves,leavesImg;


function preload(){
  gardenImg = loadImage("garden.png");

  rabbitImg = loadImage("rabbit.png");

  appleImg=loadImage("apple.png");
  leavesImg=loadImage("orangeLeaf.png");
}

function setup(){

  createCanvas(400,400);
  
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

  rabbit.x=mouseX;

  edges= createEdgeSprites();

  rabbit.collide(edges);

  var select_sprites=Math.round(random(1,2));

if(frameCount%80 == 0){
  if(select_sprites == 1){
    createApples();
  }
  else{
    createLeaf();
    }
  }
  drawSprites();
}

function createApples(){
  apples=createSprite(random(50,350),40,10,10);
  apples.scale=0.1;
  apples.addImage(appleImg);
  apples.velocityY = 4;
  apples.lifetime=50;
}

function createLeaf(){
  leaves=createSprite(random(50,350),40,10,10);
  leaves.scale=0.1;
  leaves.addImage(leavesImg);
  leaves.velocityY = 4;
  leaves.lifetime=50;
}



 
 