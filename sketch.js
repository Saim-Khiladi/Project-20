var bg, astronaut;

var bath,brush,gym,eat,sleep,move,bgImg;  
                                                                              
function preload(){

  bgImg=loadImage("Images/iss.png");
  sleep=loadAnimation("Images/sleep.png");
  brush=loadAnimation("Images/brush.png");
  bath=loadAnimation("Images/bath1.png","Images/bath2.png");
  eat=loadAnimation("Images/eat1.png","Images/eat2.png");
  gym=loadAnimation("Images/gym1.png","Images/gym2.png");
  move=loadAnimation("Images/m1.png","Images/m2.png");

}

function setup() {
  createCanvas(700,400);

  bg=createSprite(350, 200);
  bg.addImage(bgImg)
  bg.scale=0.15;

 astronaut= createSprite(400, 200);
 astronaut.addAnimation("sleeping",sleep);
 astronaut.scale=0.07;

 edge=createEdgeSprites();

}

function draw() {
  background(0); 


    if(keyDown("m")){
   astronaut.addAnimation("moving",move);
   astronaut.changeAnimation("moving");
   astronaut.y=250;
   astronaut.velocityY=-3;
   astronaut.velocityX=-2;
    }

  if(keyDown("UP_ARROW")){
   astronaut.addAnimation("brushing",brush);
   astronaut.changeAnimation("brushing");
   astronaut.y=250;
   astronaut.x=250;
   astronaut.velocityY= 0;
   astronaut.velocityX=-0;
  }

    if(keyDown("DOWN_ARROW")){
   astronaut.addAnimation("gymming",gym);
   astronaut.changeAnimation("gymming");
   astronaut.y=250;
   astronaut.x=400;
   astronaut.velocityY= 0;
   astronaut.velocityX=-0;
  }

   if(keyDown("LEFT_ARROW")){
   astronaut.addAnimation("bathing",bath);
   astronaut.changeAnimation("bathing");
   astronaut.y=250;
   astronaut.x=400;
   astronaut.velocityY= 0;
   astronaut.velocityX=-0;
  }

    if(keyDown("RIGHT_ARROW")){
   astronaut.addAnimation("eating",eat);
   astronaut.changeAnimation("eating");
   astronaut.y=250;
   astronaut.x=200;
   astronaut.velocityY=-3;
   astronaut.velocityX= 2;
  }

  astronaut.bounceOff(edge);

  drawSprites();
}