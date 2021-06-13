var bg, astronaut;

var bath,brush,gym,eat,sleep,move,bgImg;  
                                                                              
function preload(){

  bgImg=loadImage("Images/iss.png");
  sleep=loadAnimation("Images/sleep.png");
  brush=loadAnimation("Images/brush.png");
  bath=loadAnimation("Images/bath1.png","Images/bath2.png");
  eat=loadAnimation("Images/eat1.png","Images/eat2.png")
  gym=loadAnimation("Images/gym1.png","Images/gym2.png")
  move=loadAnimation("Images/move1.png","Images/move.png")

}

function setup() {
  createCanvas(800,400);

/*  bg=createSprite(400, 200);
  bg.addImage(bgImg)
  bg.scale=0.15;*/
 astronaut= createSprite(400, 200);
 astronaut.addAnimation("sleeping",sleep);
 astronaut.scale=0.07;

 edge=createEdgeSprites();

}

function draw() {
  background(bgImg); 


    if(keyDown("m")){
  // astronaut.addAnimation("moving",move);
   astronaut.changeAnimation("moving",move);
   astronaut.y=250;
   astronaut.velocityY=-3;
   astronaut.velocityX=-2;
    }

  if(keyDown("UP_ARROW")){
  // astronaut.addAnimation("brushing",brush);
   astronaut.changeAnimation("brushing",brush);
   astronaut.y=250;
  }

    if(keyDown("DOWN_ARROW")){
   astronaut.addAnimation("gymming",gym);
   astronaut.changeAnimation("gymming");
   astronaut.y=250;
  }

    if(keyDown("LEFT_ARROW")){
   astronaut.addAnimation("bathing",bath);
   astronaut.changeAnimation("bathing");
   astronaut.y=250;
  }

    if(keyDown("RIGHT_ARROW")){
   astronaut.addAnimation("eating",eat);
   astronaut.changeAnimation("eating");
   astronaut.y=250;
   astronaut.velocityY=-3;
   astronaut.velocityX=-2;
  }

  
   
  


astronaut.bouncesOff(edge);

  drawSprites();
}