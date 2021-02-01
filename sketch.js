var myEngine,myWorld,ground,tree,boy,stone,body1,body2,body3,body4,body5,body6,constraint,flag=0;
function setup()  {
    createCanvas(1000,400);
    myEngine=Matter.Engine.create();
    myWorld=myEngine.world;
    ground=new Ground(width/2,height-10,width,20);
    tree=new Tree(800,235);
    boy=new Boy(200,330);
    stone=new Stone(170,280);
    body1=new mango(800,220);
    body2=new mango(780,180);
    body3=new mango(830,170);
    body4=new mango(880,190);
    body5=new mango(730,190);
    body6=new mango(800,140);
    constraint=Matter.Constraint.create({pointA:{x:170,y:280},bodyB:stone.body,stiffness:0.1,length:50});
    Matter.World.add(myWorld,constraint);
}

function draw()  {
    background(255);
    Matter.Engine.update(myEngine);
    if(constraint.bodyB)  {
        line(constraint.pointA.x,constraint.pointA.y,stone.body.position.x,stone.body.position.y)
    }
    ground.display();
    tree.display();
    boy.display();
    stone.display();
    body1.display();
    body2.display();
    body3.display();
    body4.display();
    body5.display();
    body6.display();
    collision(stone,body1);
    collision(stone,body2);
    collision(stone,body3);
    collision(stone,body4);
    collision(stone,body5);
    collision(stone,body6);
    textSize(15);
    fill("black");
    text("Press spacebar for another chance",200,100);
}

function mouseDragged()  {
    if(flag==0)  {
        Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
    }
}

function mouseReleased()  {
    flag=1;
    constraint.bodyB=null;
}

function keyPressed()   {
    if(keyCode==32)  {
        Matter.Body.setPosition(stone.body,{x:170,y:280});
        constraint.bodyB=stone.body;
        flag=0;
    }
}

function collision(a,b)  {
    var distance=dist(a.body.position.x,a.body.position.y,b.body.position.x,b.body.position.y);
    if(distance<=a.radius+b.r)   {
        Matter.Body.setStatic(b.body,false);
    }
}