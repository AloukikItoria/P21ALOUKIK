var bullet,wall;
var speed,weight;

var thickness

function setup() {
  createCanvas(800,400);
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(50,200,20,20);
  wall=createSprite(700,200,thickness,height/2);
  bullet.velocityX = speed;
  thickness=random(22,83)
}

function draw() {
  background("white");
  

  if(hasCollided(bullet,wall)){

    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);
    
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
    
    if(damage<10){
      wall.shapeColor=color(0,255,0)
    }
    
    
    }

    drawSprites();




function hasCollided(bullet,wall){

bulletRightEdge=bullet.x +bullet.width;
wallLeftEdge=wall.x;
if(bulletRightEdge>=wallLeftEdge)
{
  return true
}
return false;
}








}
