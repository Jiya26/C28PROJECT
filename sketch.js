
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint;

var boy,boyImg;
var tree,treeImg;
var stone,stoneImg;
var chain;
var mango,mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9;
var chain1,chain2,chain3,chain4,chain5;

function preload()
{
   boyImg = loadImage("img/Plucking mangoes/boy.png");
   treeImg = loadImage("img/Plucking mangoes/tree.png");
}

function setup() {
	createCanvas(900, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy=createSprite(150,600,20,20);
	boy.addImage("boy",boyImg);
	boy.scale = 0.1;

	tree = createSprite(600,400,20,20);
	tree.addImage("tree",treeImg);
	tree.scale = 0.5;

	stone = new StoneClass(100,100,10,10);
	stone.scale = 2;
	
	chain= new Chain(stone.body,{x:100,y:550});

	mango = new MangoClass(450,300,50);
	mango1 = new MangoClass(765,325,50);
	mango2 = new MangoClass(520,350,50);
	mango3 = new MangoClass(725,355,50);
  mango4 = new MangoClass(550,190,50);
  mango5 = new MangoClass(575,305,50);
  mango6 = new MangoClass(600,250,50);
  mango7 = new MangoClass(675,275,50);
  mango8 = new MangoClass(650,200,50);
  mango9 = new MangoClass(700,225,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("white");
  text("PRESS SPACE FOR SECOND CHANCE",100,50);
  boy.display();
  stone.display();
  chain.display();
 
  detectollision(stone,mango);
  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango9);
  
  drawSprites();
  mango.display();	
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();	
  mango6.display();	
  mango7.display();	
  mango8.display();	
  mango9.display();	

}
function mouseDragged() {
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased() {
    chain.fly();
}

function detectollision(lstone,lmango){
  sBodyPosition = lstone.body.position
  mBodyPosition = lmango.body.position

  var distance = dist(sBodyPosition.x,sBodyPosition.y,mBodyPosition.x,mBodyPosition.y)
  if(distance<=lstone.radius+lmango.radius){
    Matter.Body.setStatic(lmango.body,false);
  }
}
function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stone.body,{x:100,y:550})
    chain.attach(stone.body);
  }
}