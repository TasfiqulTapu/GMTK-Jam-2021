class Menu{
    constructor(){
        this.x = 0;
        this.y = height/2;
        this._x = width/4;
        this._y = height * (1/6);
        this.cw1 = 0;
        this.ch1 = height/2 + height * (1/6)
    }
    show(){
        imageMode(CORNER);
        rectMode(CORNER);
        
       // rect(this.x, this.y,this._x,this._y)


        push();
        fill(241, 250, 238).strokeWeight(0).textSize(40);
        textAlign(LEFT);
        textFont(pxlfnt);
        text(`Play`, this.x + 40, this.y+ 45);
        fill(241, 250, 238).strokeWeight(0).textSize(20);
        text(`(space)`, this.x + 40, this.y+ 60);
        fill(241, 250, 238).strokeWeight(0).textSize(30);
        text(`Credits`, this.cw1+ 40,this.ch1+ 40);
         imageMode(CORNER);
         image(mpng,0,0,width,height);
         fill(241, 250, 238).strokeWeight(0).textSize(70);//70
        textAlign(LEFT);
        textFont(pxlfnt);
        text(`Cheeky Chappies`, 40, height/6);
        textAlign(LEFT);
        fill(241, 250, 238).strokeWeight(0).textSize(20);
        text(`by Tapu`, width/2 + 110,height/6 + 30);
        pop();

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

class Splash{
    constructor(){
        this.i = 0;
        this.total = 130;
    }
    show(){
        push();
        let sz = map(this.i,0,this.total,75,72)
        fill(241, 250, 238).strokeWeight(0).textSize(sz);//70
        textAlign(CENTER);
        textFont(pxlfnt);
        text(`Cheeky Chappies`, width/2, height/2);
        textAlign(LEFT);
        fill(241, 250, 238).strokeWeight(0).textSize(20);
        text(`by Tapu`, width/2 + 130,height/2 + 30);
        textAlign(CENTER);
        text(`made for`, width/2,height - 110);
        imageMode(CENTER);
        //logo.pause()
        image(logo,width/2,height-70,48.5*2,32*2);
        //logo.setFrame(logo.numFrames() - 1);
        pop();
    }
}
