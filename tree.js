class Tree  {
    constructor(x,y)  {
        this.width=200;
        this.height=300;
        this.body=Matter.Bodies.rectangle(x,y,this.width,this.height);
        this.img=loadImage("tree.png");
    }
    display()  {
        imageMode(CENTER);
        image(this.img,this.body.position.x,this.body.position.y,this.width,this.height);
    }
}