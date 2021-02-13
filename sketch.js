const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var box1,ground;
var sling,ball;




function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;

    ball=new Ball(200,200,50)
    sling =  new SlingShot(ball.body,{x:500,Y:50})
    }

function draw(){
    background(0);
    Engine.update(engine);
   
    ball.display();
    sling.display();
      
}



