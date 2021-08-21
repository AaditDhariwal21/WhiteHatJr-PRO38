class Chain{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10

        }
        this.bodyA=bodyA   
        this.pointB=pointB
        this.chain=Constraint.create(options);
        World.add(world,this.chain)
    }

    fly(){
    this.chain.bodyA=null;
    }   

    attach(body){
        this.chain.bodyA=body;
    }

    display(){
        if(this.chain.bodyA){
      var pointA=this.chain.bodyA.position
      var pointB=this.pointB
      console.log(pointA);
      console.log(pointB);
      strokeWeight(4);
      stroke("red");
      line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
    }

}