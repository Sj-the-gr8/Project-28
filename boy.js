class Boy  {
    constructor(x,y)  {
        this.width=100;
        this.height=200;
        this.body=Matter.Bodies.rectangle(x,y,this.width,this.height);
        this.img=loadImage("boy.png");
    }
    display()  {
        imageMode(CENTER);
        image(this.img,this.body.position.x,this.body.position.y,this.width,this.height);
    }
}