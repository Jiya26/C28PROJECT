
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy,boyImg;
var tree,treeImg;
var stone,stoneImg;
var chain;

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
	stone.scale = 0.5;
	
	chain= new Chain(boy,tree,150,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  boy.display();
  stone.display();
  chain.display();
  drawSprites();
 
}



