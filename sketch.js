var wall,thickness;
var bullet,speed,weight;


function setup()
{
  createCanvas(1200,400);
  thickness=random(22,83);
  wall=createSprite(1100,200,thickness,height/2);
  speed=random(223,321)
  weight=random(30,52)
  bullet=createSprite(50,200,20,20);
  bullet.velocityX=speed;
}

function draw()
{
  background(0)
  drawSprites()
  if( collide1 (bullet,wall))
  {
    bullet.velocityX=0;
    bullet.collide(wall)
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)

    if(damage>10)
    {
      wall.shapeColor=color(204,162,63);
    }

    if(damage<10)
    {
      wall.shapeColor=color(0,255,0)
    }
  }

  function collide1 (lbullet,lwall)
  {
    bulletRightEdge=lbullet.x +weight;
    wallLeftEdge=lwall.x;
    if(bulletRightEdge>=wallLeftEdge)
    {
      return true
    }
    else{
      return false;
    }
    
  }
  
}