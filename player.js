class Player{
    constructor(x,y){
        this.x = 490;
        this.y = 220;
        this.w1 = 20;
        this.w2= 50;
        this.r = 50;
        this.rot = 'w';
    }
    show(){
        rectMode(CENTER);
        if (this.rot == 'w') {
            rect(this.x,this.y,this.w2,this.w1);
        }else{
            rect(this.x,this.y,this.w1,this.w2);
        }
        
    }

    move(_x,_y){
        this.x += _x;
        this.y += _y;
        if(this.x - (this.w/2) < 0 ){
            this.x = this.w/2;
        } else if(this.x + (this.w/2) > width){
            this.x = width - (this.w/2);
        }
        if(this.y - (this.w/2) < 0 ){
            this.y = this.w/2;
        } else if(this.y + (this.w/2) > height){
            this.y = height - (this.w/2);
        }
    }
}