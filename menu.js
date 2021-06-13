class Menu{
    constructor(){
        this.x = 0;
        this.y = height/2;
        this._x = width/4;
        this._y = height * (1/6);

    }
    show(){
        imageMode(CORNER);
        rectMode(CORNER);
        
        rect(this.x, this.y,this._x,this._y)
        

        // image(pla,80,180,140,120);
        // image(tutorial,width/2 - 100,350,140,100);
        // image(wad,width/2 - 350,370,80,80);
        // image(arrow,width - 240,370,80,80);
        // image(cred,80,300,140,60);
        // if (mouseX > 80 && mouseX < 240 && mouseY > 300 && mouseY < 360 ) {
        //     rectMode(CORNER);
        //     image(credit,480,108,186,162);
        // }
    }
}