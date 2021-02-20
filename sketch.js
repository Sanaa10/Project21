var canvas;
var music;
var s1,s2,s3,s4;
var box;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,800);
    s1 = createSprite(400,400,10,80);
    s1.shapeColor = "blue";
    s2 = createSprite(500,500,10,80);
    s2.shapeColor = "pink";
    s3 = createSprite(600,600,10,80);
    s3.shapeColor = "yellow";
    s4 = createSprite(700,700,10,80);
    s4.shapeColor = "purple";
    box = createSprite(200,200,30,30);
    box.velocityX=5;
    box.velocityY=7;

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    box.bounceOff(edges);
    if(s1.isTouching(box) && box.bounceOff(s1)){
     box.shapeColor = "blue"
    }
    if(s2.isTouching(box) && box.bounceOff(s2)){
        box.shapeColor = "pink"
       }
    if(s3.isTouching(box) && box.bounceOff(s3)){
        box.shapeColor = "yellow"
       }
    if(s4.isTouching(box) && box.bounceOff(s4)){
        box.shapeColor = "purple"
       }
drawSprites();

    //add condition to check if box touching surface and make it box
}
