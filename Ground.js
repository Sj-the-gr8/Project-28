class Ground  {
    constructor(x,y,w,h)  {
        this.width=w;
        this.height=h;
        this.body=Matter.Bodies.rectangle(x,y,w,h,{isStatic:true});
        Matter.World.add(myWorld,this.body);
    }
    display()  {
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}