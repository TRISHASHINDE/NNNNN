const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ball;
var ground;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  ball=Bodies.circle(200,100,20);
World.add(world,ball);
ground=Bodies.rectangle(200,390,200,20);
World.add(world,ground);
}

function draw() {
  background("black"); 
  Engine.update(engine);
  rectMode(CENTER)
  ellipse(ball.position.x,ball.position.y,20,20) ;
rect(ground.position.x,ground.position.y,400,20);
  drawSprites();
}