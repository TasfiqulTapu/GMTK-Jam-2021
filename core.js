class Core{
    constructor(){
        this.x = width/2;
        this.y = height/2;
        this.w = 50;
        this.health = 5;
    }
    show(){
        rectMode(CENTER);
        rect(this.x,this.y,this.w,this.w);
    }
}