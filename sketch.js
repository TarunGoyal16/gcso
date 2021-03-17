
var wall,bullet,thickness,weight,speed

function setup() {
	createCanvas(1200,400);
	thickness=random(22,83)
wall= createSprite(1100,200,thickness,200)
wall.shapeColor="grey"
weight=random(30,52)
speed=random(10,80)
bullet=createSprite(20,200,70,20)
bullet.velocityX=speed

}


function draw() {
  background(0);
  
  if(wall.x-bullet.x<=(wall.width/2+bullet.width/2)){
	damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness)
	  bullet.velocityX=0
	  if(damage<5){
		  wall.shapeColor="green"
	  }
	  else{
		  wall.shapeColor="red"
	  }
  }
  drawSprites();
 
}



