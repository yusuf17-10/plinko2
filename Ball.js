class Ball {
    constructor(x,y,radius) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      this.color=color(random(0,255),random(0,255),random(0,255));
      World.add(world, this.body);
      
    }
    display(){
      var pos =this.body.position;
      push();
      ellipseMode(RADIUS);
      fill(this.color);
      ellipse(pos.x,pos.y, this.radius, this.radius);
      pop();

    }
  };