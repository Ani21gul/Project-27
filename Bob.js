class Bob{
    constructor(x,y,r){
        var options = {
            restitution: 0.3,
            friction:0.5,
            density:1.2
        } 
        this.body = Bodies.circle(x,y,r, options);
        this.radius = r;
        
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        fill("pink");
        ellipse(0,0, this.width, this.height );
        pop();
    }
}