const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var box1;
var box2;
var ground1;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
world = engine.world;








box1 = new Box(200,200,50,50)

box2 = new Box(300,300,50,50)
ground1 = new Ground(400,400,800,10)




}

function draw() {
    background("yellow");  
    Engine.update(engine);
 

   
box1.display();
box2.display();
ground1.display();

}



