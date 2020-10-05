var wall,Bullet
 
var speed;
var weight;

function setup() {
  createCanvas(800,400);

 speed=random(223,321);
weight=random(30,52);
thickness=random(22,83);
 
 Bullet= createSprite(40, 200, 50, 50);
 wall=createSprite(700, 200,thickness,height/2);
}

function draw() {
  background("black");  

  

Bullet.velocityX=speed;

Bullet.shapeColor=("white")
wall.shapeColor=("white")
 
if(wall.x - Bullet.x < ( Bullet.width/2 + wall.width)/2 )
{
  Bullet.velocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
if(damage>10)
{
Bullet.shapeColor=color("red")
}

if(damage<10)
{
Bullet.shapeColor=color("green")
}


}

drawSprites();
}
