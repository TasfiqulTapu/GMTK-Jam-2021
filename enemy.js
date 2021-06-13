class Enemy{
    constructor(l,type){
        if (l=='a') {
        this.x = -30;
        this.y = height/2;
        this.xdir = 1;
        this.ydir = 0;
        }if (l=='w') {
            this.x = width/2;
            this.y = -30;
            this.xdir = 0;
            this.ydir = 1;
            }if (l=='d') {
                this.x = width+30;
                this.y = height/2;
                this.xdir = -1;
                this.ydir = 0;
                }if (l=='s') {
                    this.x = width/2;
                    this.y = height+30;
                    this.xdir = 0;
                    this.ydir = -1;
                    }
        this.health = 1;
        this.w1 = 20;
        this.w2 = 50;
        this.type = type;
    }
    show(){
        rectMode(CENTER);
        if (this.ydir == 0) {
            rect(this.x,this.y,this.w2,this.w1);
        }else{
            rect(this.x,this.y,this.w1,this.w2);
        }
    }
    update(player,core){
        this.x += this.xdir;
        this.y += this.ydir;
        if (this.x>width+100 || this.x<-100 ||this.y>height+100 || this.y<-100 ) {
            this.health = 0;
        }
        let d = dist(this.x,this.y,player.x,player.y)
        if (d < (player.w1 + player.w2 )/2) {
            this.health = 0;
        }
        if (this.type == 0) {
            let dc = dist(this.x,this.y,core.x,core.y)
            if (dc < core.w) {
                this.health = 0;
                core.health -= 1;
            }
        }
        if (this.type == 1) {
            let dc = dist(this.x,this.y,core.x,core.y)
            if (dc < core.w) {
                this.health = 0;
                core.health += 1;
            }
        }

    }
}