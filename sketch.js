
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint;

var boy,boyImg;
var tree,treeImg;
var stone,stoneImg;
var chain;
var mango,mango1,mango2,mango3,mango4;
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

	mango = new MangoClass(600,350,50);
	mango1 = new MangoClass(630,370,50);
	mango2 = new MangoClass(580,330,50);
	mango3 = new MangoClass(610,340,50);
	mango4 = new MangoClass(640,360,50);

	chain1 = new Chain(mango.body,{x:600,y:350});
	chain2 = new Chain(mango1.body,{x:630,y:370});
	chain3 = new Chain(mango2.body,{x:580,y:330});
	chain4 = new Chain(mango3.body,{x:610,y:340});
	chain5 = new Chain(mango4.body,{x:640,y:360});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  boy.display();
  stone.display();
  chain.display();
 
  drawSprites();
  mango.display();	
  mango2.display();
  mango1.display();
  mango4.display();
  mango3.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

}
function mouseDragged() {
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased() {
    chain.fly();
}

