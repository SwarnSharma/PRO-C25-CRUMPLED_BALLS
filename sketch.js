
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject;
var paper,winningSound;
var world;

function preload(){
	bg=loadImage("bg.jpg");
	winningSound=loadSound("Winning Sound.mp3");
}

function setup() {
	createCanvas(1360, 650);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject = new ground(width/2,640,width,20);
	dustbinObj = new dustbin(1200,620);
    paper = new Paper(100,100,50);
    keyPressed();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
 
  groundObject.display();
  dustbinObj.display();
  paper.display();
  text(mouseX+","+mouseY,mouseX,mouseY);
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:300,y:-245});
	}
	//if(paper.x>1110 && paper.y>415 && paper.x<1270){
    //winningSound.play();
	//}
}
