const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var plinko=[];
var plinko2=[];
var plinko3=[];

var particle;


var divisions=[];

var ball=[];


var ground;
function setup() {
  var canvas =  createCanvas(600,600);
  engine = Engine.create();
  world = engine.world;
 ground = new Ground(300,595,600,10);

 for(var i =0;i<=600;i=i+60){
  divisions.push(new Division(i,500,10,200));
 }

 for(var i =20;i<=600;i=i+60){
  plinko.push(new Plinko(i,200,10,200));
  plinko2.push(new Plinko(i+30,300,10,200));
  plinko3.push(new Plinko(i,100,10,200));
 }

 

}


/*function mousePressed(){
    var r = Math.round(random(50,550));
    ball.push(new Ball(r,0,10));
}*/

/*function mousePressed(){
  if(gameState!=="end"){
  }
  count++;
  particle = new Particle(mouseX,10,10,10);
}*/

/*if(particle!=null){
  particle.display();

  if(particle.body.position.y>760){
    if(Particle.body.position.x<300){
      score=score+500;
      particle=null;
      if(count>=5)gameState="end";
    }
  }
}*/




function draw() {
  background(0);  

  Engine.update(engine);

  for(var i=0;i<divisions.length;i=i+1){
    divisions[i].display();
    
   }

   for(var i=0;i<plinko.length;i=i+1){
    plinko[i].display();
    plinko2[i].display();
    plinko3[i].display();
   }
    if(frameCount% 60===0){
      var r = Math.round(random(50,550));
      ball.push(new Ball(r,0,10));
    }
   for(var i=0;i<ball.length;i=i+1){
        ball[i].display();
   }


   
   

  ground.display();
  
}

