class Hexagon{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        
    }
    display(){
        if(frameCount%80===0){
        this.body = createSprite(this.x,this.y,this.width,this.height);
        var rand=Math.round(random(1,3));
        switch(rand){
            case 1: this.body.addImage(blueHexagonImg);
                    this.body.scale = random(0.8,1);
                    break;
            case 2: this.body.addImage(redHexagonImg);
                    this.body.scale = random(0.6,0.8);
                    break;
            case 3: this.body.addImage(greenHexagonImg);
                    this.body.scale = random(0.08,0.2);
                    break;
            default: break;
        }
        this.body.velocityY = 6;
        }
       // this.body.scale=random()
    }
}