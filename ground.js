class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic: true,
            restitution:2.0,
            density: 3.0

        }

        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
display(){
    var pos=this.body.position
    push();
    translate(pos.x,pos.y);
    fill("lime");
    rect(0,0,this.width,this.height);
    pop();
}
    
}