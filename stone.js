class StoneClass {
    constructor(x, y,width,height) {
      var options = {
          'restitution':0.5,
          'friction':1,
          'density':1.5
      }
      this.body = Bodies.circle(x, y, 30, options);
      this.radius = 30;
      this.image=loadImage("img/Plucking mangoes/stone.png");
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();

      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0,this.radius,this.radius);
      pop();
    }
  }