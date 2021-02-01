class Stone  {
    constructor(x,y)  {
        this.radius=20;
        this.body=Matter.Bodies.circle(x,y,this.radius,{density:2});
        Matter.World.add(myWorld,this.body)
        this.img=loadImage("stone.png");
    }
    display()  {
        imageMode(CENTER);
        image(this.img,this.body.position.x,this.body.position.y,this.radius*2,this.radius*2);
    }
}