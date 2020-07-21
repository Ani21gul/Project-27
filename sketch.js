const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;
var chain1,chain2,chain3,chain4,chain5;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  //roof
  roof = new Roof(400,250,500,10);

  //bob
  bobObject1 = new Bob(180,450,1);
  bobObject2 = new Bob(280,450,1);
  bobObject3 = new Bob(380,450,1); 
  bobObject4 = new Bob(480,450,1); 
  bobObject5 = new Bob(580,450,1); 

  //chains
  chain1 = new Chain(bobObject1.body, {x:200,y:250});
  chain2 = new Chain(bobObject2.body,{x:200,y:250});
  chain3 = new Chain(bobObject3.body,{x:200,y:250});
  chain4 = new Chain(bobObject4.body,{x:200,y:250});
  chain5 = new Chain(bobObject5.body,{x:200,y:250});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  
  drawSprites();
 
}
function keyPressed(){
  if(keyCode === 32){
        
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position,{x:-50, y:-100});
	}
}



