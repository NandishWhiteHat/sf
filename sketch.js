const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var snow = [];
function preload(){
  bgImg = loadImage("snow2.jpg");
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  for(var i = 0; i < 300; i++){
    snow = new Snow(400, 0, 20);
  }

}

function draw() {
  background(bgImg);  

  snow.display();

  drawSprites();
}