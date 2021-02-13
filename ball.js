class Ball {
    constructor(x,y,radius){
        var options ={
            restitution:0.8,
            friction:0.5,
            density:0.3,
        }
        this.body=Bodies.circle(x,y,radius,options)
    
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        
        push ()
        fill("red")
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,50,50)
        pop ()
    }
    
    
    }