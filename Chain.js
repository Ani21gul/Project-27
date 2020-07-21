class Chain{
    constructor(body1, body2){
        var options = {
            bodyA:body1,
            pointB:body2,
            stiffness:0.5,
            length: 300
        }
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }
    display(){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        strokeWeight(5);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        
        
     
    }
}