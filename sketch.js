

var bgImg,blasterImg,blueHexagonImg,redHexagonImg,greenHexagonImg,bulletImg;
var blaster;
var bullet;
var hexagon;

function preload(){
    bgImg = loadImage("bg.jpg");
    blasterImg = loadImage("blaster.png");
    blueHexagonImg = loadImage("bluehexagon.png");
    redHexagonImg = loadImage("redhexagon.png");
    greenHexagonImg = loadImage("greenhexagon.png");
    bulletImg = loadImage("bullet.png");
}

function setup(){
    createCanvas(1000,600);

    blaster = createSprite(500,500,25,25);
    blaster.addImage(blasterImg);
    blaster.scale = 0.7;

    
}

function draw(){
    background(bgImg);
text(mouseX+", "+mouseY,mouseX,mouseY);
    if(keyDown(LEFT_ARROW) && blaster.x>20){
        blaster.x-=7;
    }

    if(keyDown(RIGHT_ARROW) && blaster.x<980){
        blaster.x+=7;
    }

    if(frameCount%10===0){
        bullet = createSprite(blaster.x, 430,10,10);
        bullet.addImage(bulletImg);
        bullet.scale=0.06;
        bullet.velocityY=-8;
    }

    dropHexagons();

    drawSprites();
}

function dropHexagons(){
    if(frameCount%80===0){
        hexagon = createSprite(random(50,950),-20,25,25);
        var rand=Math.round(random(1,3));
        switch(rand){
            case 1: hexagon.addImage(blueHexagonImg);
                    hexagon.scale = random(0.8,1);
                    break;
            case 2: hexagon.addImage(redHexagonImg);
                    hexagon.scale = random(0.6,0.8);
                    break;
            case 3: hexagon.addImage(greenHexagonImg);
                    hexagon.scale = random(0.08,0.2);
                    break;
            default: break;
        }
        hexagon.velocityY = 6;
        }
}