var wall , thickness;
var bullet , speed , weight;


function setup() {

  createCanvas(1600,400);

  speed = random(55 , 90);
  weight = random(400,1500);

  thickness = random(22 , 83);


  bullet = createSprite(50, 200, 50, 5);
  bullet.shapeColor = ("white");
  bullet.velocityX = speed;

  wall = createSprite(1200, 200, thickness, 200);
  wall.shapeColor = ("grey");

}


function draw() {

  background("black"); 

  if(hasCollided(bullet , wall)) {

    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness *thickness *thickness);
    
    if(damage>10) {
      wall.shapeColor = color(255,0,0);
    }
    
    if(damage<10) {
      wall.shapeColor = color(0,255,0);
    }
    
    }

drawSprites();
}


function hasCollided(bullet1 , wall1) {

  bulletRightEdge = bullet1.x + bullet1.width;
  wallLeftEdge = wall1.x;
  if(bulletRightEdge>=wallLeftEdge) {
    return true;
  }
  return false;

}


    




