class Core{
    constructor(){
        this.x = width/2;
        this.y = height/2;
        this.w = 50;
        this.health = 5;
    }
    show(){
        imageMode(CENTER);
        if (this.health >= 5) {
            image(h5,this.x,this.y,this.w,this.w)
        } else if (this.health == 4) {
            image(h4,this.x,this.y,this.w,this.w)
        } else if (this.health == 3) {
            image(h3,this.x,this.y,this.w,this.w)
        } else if (this.health == 2) {
            image(h2,this.x,this.y,this.w,this.w)
        } else if (this.health == 1) {
            image(h1,this.x,this.y,this.w,this.w)
        }
    }
}