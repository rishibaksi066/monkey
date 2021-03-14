var ground
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(750,600)
  ground=createSprite(375,590,1650,15)
ground.velocityX=-10;
  monkey=createSprite(70,528)
  monkey.addAnimation("hi",monkey_running)
  monkey.scale=0.2
FoodGroup=new Group();
obstacleGroup= new Group();
}


function draw() {
background("red")
  if(ground.x<0){
    ground.x=375 }
  monkey.collide(ground)
  if(keyDown("space")&&monkey.y>461){
    monkey.velocityY=-18
  }
  monkey.velocityY=monkey.velocityY+0.8
 bannana(); 
  obstakle();
  if(obstacleGroup.isTouching(monkey)){
    ground.velocityX=0
    monkey.velocityY=0
    obstacleGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1)
    FoodGroup.setLifetimeEach(-1)

  }
drawSprites();  
}

function bannana(){
  if(frameCount%60==0){
    banana=createSprite(900,400)
  banana.velocityX=-14
  banana.addImage(bananaImage);
    banana.scale=0.25
  banana.y=Math.round(random(200,400))
    monkey.depth=banana.depth+1
  FoodGroup.add(banana)
     banana.lifetime=1010
  }
  
}

function obstakle(){
  if(frameCount%60==0){
    obstacle=createSprite(900,539.99)
  obstacle.velocityX=-14
  obstacle.addImage(obstacleImage);
    obstacle.scale=0.25
    obstacle.depth=obstacle.depth+1
  obstacleGroup.add(obstacle)
  obstacle.lifetime=1010
  
  }
  
}



