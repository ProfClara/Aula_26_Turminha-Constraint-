//namespacing = abreviações
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
//declarações de variáveis
let engine;
let world;
var ground;
var top_wall;
var ball;
var btn1;
var btn2;
var coneccao;

function setup() {
  //cria a tela
  createCanvas(400,400);
  //cria física
  engine = Engine.create();
  //cria o mundo
  world = engine.world;
  // deixa a bolinha quicar
   var ball_options = {
    restitution: 0.95,
  }

  //cria o botão
  btn2 = createImg('up.png');
  //muda a posição do botão
  btn2.position(20,30);
  //muda o tamanho do botão
  btn2.size(50,50);
  //ativa uma função
  btn2.mouseClicked(vForce);
  //chão
  ground =new Ground(200,390,400,20);
//bolinha
  ball = Bodies.circle(100,200,20,ball_options);
  World.add(world,ball);
  
  
coneccao = Constraint.create({
pointA:{x:200,y:20}, //ponto que prende a corda
bodyB:ball, // qual objeto vamos prender na corda
pointB:{x:0,y:0}, //prendendo a corda no centro da bolinha
stifness:0.1 // elasticidade da corda
  });

  World.add(world,coneccao)
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  ground.show();
  
  Engine.update(engine);

  var c = coneccao.pointA
  var pos =ball.position
  push ()
  stroke ("yellow");
  strokeWeight(5)
  line(c.x, c.y, pos.x,pos.y)
  
  pop ()
}


function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
  


