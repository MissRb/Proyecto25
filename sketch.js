
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paper

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);  

	paper = new Paper(200,350,20);//aumenta el tamaño del radio y 
//	Matter.Body.scale(paper.body,0.1,0.1); //Está bien escrito. En este
	//método se afecta a todas las propiedades del objeto, puedes poner
	//modificar la escala cambiando el tamaño del radio o en la clase podrías hacer 
	//una division del radio (r/2)para ajustar el tamaño

	Engine.run(engine);  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  groundObject.display();
  dustbinObj.display();
  paper.display();
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{X:130,Y:-145});//signo
	}
}
