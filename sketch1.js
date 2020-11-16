const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint =  Matter.Constraint;
const Render =  Matter.Render;


var engine = Engine.create();
world = engine.world;

var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: 800,
        height: 600,
        showAngleIndicator: true
    }

});
Render.run(render);

function preload() {
    createCanvas(900,400);
    engine =  engine.world;
    Engine.run(engine);
    ground = new Ground();
    platform1 = new Stand();
    platform2 = new Stand();

    block1 = new Block(300,275,25,40);
    block2 = new Block(325,275,25,40);
    block3 = new Block(350,275,25,40);
    block4 = new Block(375,275,25,40);
    block5 = new Block(400,275,25,40);
    block6 = new Block(425,275,25,40);
    block7 = new Block(450,275,25,40);

    block8 = new Block(325,235,25,40);
    block9 = new Block(350,235,25,40);
    block10 = new Block(375,235,25,40);
    block11= new Block(400,235,25,40);
    block12= new Block(425,235,25,40);

    block13= new Block(350,195,25,40);
    block14= new Block(375,195,25,40);
    block15= new Block(400,195,25,40);

    block16= new Block(375,155,25,40);

    blocks1= new Block(640,175,25,40);
    blocks2= new Block(665,175,25,40);
    blocks3= new Block(690,175,25,40);
    blocks4= new Block(715,175,25,40);
    blocks5= new Block(740,175,25,40);

    blocks6= new Block(665,135,25,40);
    blocks7= new Block(690,135,25,40);
    blocks8= new Block(715,135,25,40);

    blocks9= new Block(685,95,25,40);

    rockoptions ={ density : 0.004 };
    rock = Bodies.polygon(170,450,8,20,rockoptions);

    World.add(world,rock);

    sling = new SlingShot(this.rock,{x:100,y:200});

    function draw() {
        background(56,44,44);

        textSize(20);
        fill("lightyellow");
        text("Drag Rock and Release it",100,30);
        ground.display();
        platform1.display();
        platform2.display();
        strokeWeight(2);
        stroke(15);
        fill("skyblue");
        block1.display();
        lock2.display();
        block3.display();
        block4.display();
        block5.display();
        block6.display();
        block7.display();
        fill("pink");
        block8.display();
        block9.display();
        block10.display();
        block11.display();
        block12.display();
        ill("turquoise");
        block13.display();
        block14.display();
        block15.display();
        fill("grey");
        block16.display();
        fill("skyblue");
        blocks1.display();
        blocks2.display();
        blocks3.display();
        blocks4.display();
        blocks5.display();
        fill("turquoise");
        blocks6.display();
        blocks7.display();
        blocks8.display();
        fill("pink")
        blocks9.display();
        fill("gold");
        imageMode(CENTER)
        image(rock ,rock.position.x,rock.position.y,40,40);

        SlingShot.display();
        
    }

    function mouseDragged() {
        Matter.Body.setPosition(this.rock,{x:mouseX,y:mouseY});
    }

    function mouseReleased(){
        SlingShot.fly();
    }
}