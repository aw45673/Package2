var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 20 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	baseBody = Bodies.rectangle(width/2,655,150,15,{isStatic:true})
	World.add(world,baseBody);
	leftBody = Bodies.rectangle(325,610,10,85,{isStatic:true})
	World.add(world,leftBody);
	rightBody = Bodies.rectangle(475,610,10,85,{isStatic:true})
	World.add(world,rightBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	console.log(baseBody);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  fill("red");
  rect(baseBody.position.x,baseBody.position.y,150,15)
  rect(leftBody.position.x,leftBody.position.y,10,85)
  rect(rightBody.position.x,rightBody.position.y,10,85)
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false)
    
  }
}



