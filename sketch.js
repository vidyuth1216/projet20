var car;
var wall;
var speed;
var weight;


function setup() {
  createCanvas(1600,400);
  speed = random(55,90)
  weight = random(400,1500);

  car = createSprite(50,200,50,50);
  car.shapeColor = "red"
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = "green"

  car.velocityX = speed;

}

function draw() {
  background(0,0,0);  
 


 if(wall.x - car.x < (car.width+wall.width)/2){

  car.velocityX = 0;
  var deformaton = 0.5*weight*speed*speed/22509;
  if(deformaton > 180){
    car.shapeColor = colour(255,0,0);
  }
  if(deformaton < 180 && deformaton > 100){
    car.shapeColor = colour(230,230,0);
  }
  if(deformaton < 100){
    car.shapeColor = colour(0,255,0);
  }
 }


  
  drawSprites();
}