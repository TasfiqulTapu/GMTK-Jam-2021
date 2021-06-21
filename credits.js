class Credits{
    constructor(){
        
    }
    show(){
        push();
        textAlign(CENTER);
        textFont(pxlfnt);
        fill(241, 250, 238).strokeWeight(0).textSize(height * 0.037);
        text(`Made by`, width/2, 50);
        text(`Everyting else was done by me - Tapu`, width/2, 280);
        text(`Font`, width/2, 205);
        text(`Music`, width/2, 150);
        text(`Jam logo provided by GMTK`, width/2, 260);
        text(`@TasfiqulTapu`, width/2, 120);
        text(`Click anywhere to go back`, width/2, height-20);
        text(`Made for`, width/2, height-120);


        fill(241, 250, 238).strokeWeight(0).textSize(height * 0.074);
        text(`Tasfiqul Tapu`, width/2, 90);
        fill(241, 250, 238).strokeWeight(0).textSize(height * 0.046);
        text(`ghost choir - Louie Zong`, width/2, 180);
        text(`LCD Solid Font - LCD Solid`, width/2, 235);
         imageMode(CENTER);
        image(logo,width/2,height-85,height * 0.179,height * 0.118)
        pop();

    }
}