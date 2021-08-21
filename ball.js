class Ball{
    constructor(x,y){
        var options={
            isStatic: false,
            restitution:0.3,
            friction:5,
            density:1.2

        }

        this.body=Bodies.circle(x,y,30,options);
        this.radius=30;
        World.add(world,this.body);
       
    }
display(){
   
    var pos=this.body.position
    var angle=this.body.angle
    push();
    translate(pos.x,pos.y);
    fill("yellow");
    rotate(angle);
    ellipseMode(CENTER);
    ellipse(0,0,30,30);
    pop();
}
    
}