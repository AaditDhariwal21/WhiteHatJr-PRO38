const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14;
var b15,b16,b17,b18,b19,b20,b21,b22,b23;
var ground,ground2;
var ball;
var chain;
var backgroundImg

function preload() {
  getBackgroundIMG();
}

function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;

  b1= new Block(690, 250);
  b2= new Block(670, 250);
  b3= new Block(650, 250);
  b4= new Block(630, 250);
  b5= new Block(610, 250);
  b6= new Block(620,210);
  b7= new Block(640,210);
  b8= new Block(660,210);
  b9= new Block(680,210);
  b10=new Block(630,170);
  b11=new Block(650,170);
  b12=new Block(670,170);
  b13=new Block(640,130);
  b14=new Block(660,130);

  b15=new Block(1030,155);
  b16=new Block(1050,155);
  b17=new Block(1070,155);
  b18=new Block(1090,155);
  b19=new Block(1040,115);
  b20=new Block(1060,115);
  b21=new Block(1080,115);
  b22=new Block(1050,75);
  b23=new Block(1070,75);
  
  ground=new Ground(580,270,200,10);
  ground2=new Ground(1000,175,175,10);
  

  ball=new Ball(50,50);

  chain=new Chain(ball.body,{x:150,y:150});
}

function draw() {
  if(backgroundImg)
    background(backgroundImg);
 
  Engine.update(engine);
  
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();

  b15.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b21.display();
  b22.display();
  b23.display();

  ground.display();
  ground2.display();
  

  ball.display();

  chain.display();
  

  
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  chain.fly();
}

function keyPressed(){
  if(keyCode === 32){
      chain.attach(ball.body);
  }
}

async function getBackgroundIMG(){
 
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON=await response.json();
  var datetime=responseJSON.datetime;
  var hours=datetime.slice(11,13);
   if(hours>=06 && hours<18){
       bg="morning background.jpg"
   }
   else{
       bg="night background.jpg"
   }

   backgroundImg=loadImage(bg);

}