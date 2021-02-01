class mango  {
    constructor(x,y)  {
        this.r=20;
        this.body=Matter.Bodies.circle(x,y,this.r,{isStatic:true});
        Matter.World.add(myWorld,this.body)
        this.img=loadImage("mango.png");
    }
    display()  {
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.img,0,0,this.r*2,this.r*2);
        pop();
    }
}