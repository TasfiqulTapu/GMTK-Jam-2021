let menu,game,spn,player,core,lvl,tstage,hint,cre,logo,sps;
let h1,h2,h3,h4,h5,en,he,sh,ov,pxlfnt,hit,hem,moosic,mpng;
let enemy = [];
let score = 0;
let currentScreen;
let playing = false;
let hurt = false;
let hc = 0;
function preload() {

  logo = loadImage('art/gmtk.gif');
  soundFormats('wav','mp3');
  hit = loadSound('art/hit.wav');
  hem = loadSound('art/health.wav');
  moosic = loadSound('art/spoopy.mp3');
  h1 = loadImage('art/5.png');
  h2 = loadImage('art/4.png');
  h3 = loadImage('art/3.png');
  h4 = loadImage('art/2.png');
  h5 = loadImage('art/1.png');
  en = loadImage('art/enemy.png');
  he = loadImage('art/heart.png');
  sh = loadImage('art/shield.png');
  ov = loadImage('art/overlay.png');
  mpng = loadImage('art/menu.png');
  pxlfnt = loadFont('art/pixelFont.ttf');

}

function setup() {
  if (windowWidth>=980 && windowHeight>=540) {
    createCanvas(980, 540);
  }else{
    createCanvas(windowWidth, windowHeight);
  }
    menu = new Menu();
    spn = new Spawner();
    cre = new Credits();
    sps = new Splash();
    currentScreen = 'menu';
    player = new Player(width/2,height/2);
    core = new Core();
    //spn.debug(-30,height/2,1,0,5);
    
}

//this.x, this.y,this._x,this._y
function mousePressed() {
    if (currentScreen == 'menu') {
      if (mouseX>menu.x && mouseX<(menu.x+menu._x) && mouseY>menu.y && mouseY<(menu.y+menu._y)) {
        currentScreen = 'game';
        console.log('e');
        reset()
      }
      if (mouseX>menu.cw1 && mouseX<(menu.cw1+menu._x) && mouseY>menu.ch1 && mouseY<(menu.ch1+menu._y)) {
        currentScreen = 'credits';
       }
    }else if (currentScreen == 'game') {
      if (mouseX>width/3 && mouseX<width/3 * 2 && mouseY>0 && mouseY<height/2) {
        player.x = width/2;
        player.y = height/2 - player.r;
        player.rot = 'w';
      } else if (mouseX>width/3 && mouseX<width/3 * 2 && mouseY>height/2 && mouseY<height){
        player.x = width/2;
        player.y = height/2 + player.r;
        player.rot = 'w';
      }else if (mouseX>0 && mouseX<width/2 && mouseY>height/3 && mouseY<height/3 * 2) {
        player.x = width/2 - player.r;
        player.y = height/2;
        player.rot = 'l';
      } else if (mouseX>width/2 && mouseX<width && mouseY>height/3 && mouseY<height/3 * 2){
        player.x = width/2 + player.r;
        player.y = height/2;
        player.rot = 'l';
      }
    }else if (currentScreen == 'credits') {
      currentScreen = 'menu';
    }else if (currentScreen == 'gameover') {
      if (mouseX>width*(3/7) && mouseX<width*(4/7) && mouseY>height*(2/5) && mouseY<height*(3/5)) {
        currentScreen = 'game';
        console.log('e');
        reset()
    }
  }
  }

function draw() {
    background(69, 123, 157);
  //  if (enemy.length > 0) {
  //    console.log(enemy)
  //  }
    if ( sps.i < sps.total) {
      currentScreen = 'splash'
       sps.i++ ;
    }else if(currentScreen == 'splash'){
      currentScreen = 'menu'
    }
    if (currentScreen == 'menu') {
        menu.show();
       moosic.pause();
       playing = false;

    }else if (currentScreen == 'credits') {
      cre.show();
    }else if (currentScreen == 'splash') {
      sps.show();
    }else if (currentScreen == 'game') {
      
      if (hurt == true && hc < 10 ) {
        translate(random(-2,2),random(-2,2));
        hc++
      }else{
        hurt = false;
        translate(0,0);
      }

      spn.spawn(lvl);
        for (let i = 0; i < enemy.length; i++) {
          enemy[i].update(player,core);
          enemy[i].show();
          if (enemy[i].health == 0) {
            enemy.splice(i, 1);
            if (tstage == 1) {
              tstage = 2;
              makeEnemy(lvl, tstage);
            }
          }
        }
        // :(
        // You ruined the fun for yourself
        if (tstage == 3) {
          hint = 'Hearts are nice unlike ghosts';
        }
        if (tstage == 5 ||tstage == 6) {
          hint = 'More health = Less visibility \n they\'re like joined together';
        }
        if (score>150) {
          hint = 'GLHF'
        }
        if (score>200) {
          hint = 'Its a buggy mess I suggest u stop playing'
        }
        if (score>300) {
          hint = 'I never expected anyone to play this far'
        }
        if (score>400) {
          hint = 'This is garbage, stop playing.'
        }
        if (score>500) {
          hint = 'I really shouldn\'t have realesed this game'
        }
        if (score>700) {
          hint = 'Are you playing to read these messages?'
        }
        if (score>800) {
          hint = '...'
        }
        if (score>850) {
          hint = 'I myself haven\'t played this far'
        }
        if (score>950) {
          hint = 'Since you\'ve come this far i\'ll ask you one thing'
        }
        if (score>1100) {
          hint = 'Why the f are you still playing'
        }
        if (score>1290) {
          hint = 'You probably are the first person to reach this'
        }
        if (score>1500) {
          hint = 'This spaghetti code hurts my head';
        }
        if (score>1680) {
          hint = 'here\'s a secret...'
        }
        if (score>1780) {
          hint = 'I\'m enjoying writing these'
        }
        if (score>1900) {
          hint = 'I\'m tired so byee....'
        }
        if (score>2300) {
          hint = 'STOP PLAYING \n It hurts me'
        }
        if (score>2700) {
          hint = 'You\'re a stubborn one aren\'t you?'
        }if (score>3100) {
          hint = 'Please stop'
        }if (score>3600) {
          hint = 'Stop'
        }if (score>4000) {
          hint = 'Close down thw window and put this \n time to better use'
        }if (score>4500) {
          hint = 'Maybe find some new hobbies'
        }if (score>4900) {
          hint = 'Help out on some work around the house'
        }if (score>5400) {
          hint = 'No point talking with you'
        }if (score>5900) {
          hint = 'I give up'
        }if (score>6300) {
          hint = 'Here take this trophy'
        }if (score>6800) {
          hint = 'You win I lose'
        }if (score>7200) {
          hint = 'This is end of this game.'
        }if (score>8000) {
          hint = ''
        }
        if (score>14000) {
          hint = 'Hacking is not cool'
        }
        if (score>14400) {
          hint = '... but I\'ll allow it since it\'s singleplayer'
        }
        if (score>15000) {
          hint = ''
        }
        // Stop looking at page source :(
        // There are better things you could be doing

        if (core.health >= 5 && tstage > 4) {
          imageMode(CENTER)
          image(ov,width/2,height/2,width*6.5/5,height*6.5/5)
        }
        if (core.health == 4 && tstage > 4) {
          imageMode(CENTER)
          image(ov,width/2,height/2,width*7/5,height*7/5)
        }
        if (core.health == 3 && tstage > 4) {
          imageMode(CENTER)
          image(ov,width/2,height/2,width*8/5,height*8/5)
        }
        if (core.health == 2 && tstage > 4) {
          imageMode(CENTER)
          image(ov,width/2,height/2,width*9/5,height*9/5)
        }
        if (core.health == 1 && tstage > 4) {
          imageMode(CENTER)
          image(ov,width/2,height/2,width*2,height*2)
        }

        player.show();
        core.show();
        if (enemy.length == 0){
          tstage+=1;
          makeEnemy(lvl,tstage);
        }
        if (tstage>5) {
          makeEnemy(lvl,tstage);
        }
        if (lvl > 0.045) {
          lvl = 0.045;
        }
        if (core.health < 1) {
          currentScreen = 'gameover'
        }
        if (core.health > 5) {
          core.health = 5;
        }
        push();
        fill(241, 250, 238).strokeWeight(0).textSize(40);
        textAlign(LEFT);
        textFont(pxlfnt);
        text(`Score:${score}`, 10, 40);
        imageMode(CENTER)
        image(he,width-60,25,40,40)
        text(`${core.health}`, width-30, 40);
        fill(241, 250, 238).strokeWeight(0).textSize(20);
        textAlign(CENTER);
        text(`${hint}`, width/2, height-30);
        pop();
       // console.group(frameRate())
       //console.log(frameRate())
    }else if (currentScreen == 'gameover') {
      
      push();
        fill(241, 250, 238).strokeWeight(0).textSize(40);
        textAlign(CENTER);
        textFont(pxlfnt);
        text(`${score}`, width/2, height*(1/3));
        imageMode(CENTER);
        image(en,width/2,height/2,64,64)
        fill(241, 250, 238).strokeWeight(0).textSize(20);
        text(`Press on the ghost to restart\n Esc to go to menu`, width/2,height*(2/3) );
        pop();
    }

    
    
}

function keyPressed() {
    if (currentScreen == 'menu' && keyCode === 32) { 
        currentScreen = 'game';
        // lvl = 1;
        // spn.spawn(lvl);
        reset()
      }
    if (currentScreen == 'game' && keyCode === 27) { 
        currentScreen = 'menu';
      }
    if (currentScreen == 'gameover' && keyCode === 27) { 
      currentScreen = 'menu';
    }
    if (currentScreen == 'credits' && keyCode === 27) { 
      currentScreen = 'menu';
    }
    if (currentScreen == 'game') { 
       
      if (keyCode == 87 || keyCode == 38) {
        player.x = width/2;
        player.y = height/2 - player.r;
        player.rot = 'w';
      } else if (keyCode == 83 || keyCode == 40){
        player.x = width/2;
        player.y = height/2 + player.r;
        player.rot = 'w';
      }else if (keyCode == 65 || keyCode == 37) {
        player.x = width/2 - player.r;
        player.y = height/2;
        player.rot = 'l';
      } else if (keyCode == 68 || keyCode == 39){
        player.x = width/2 + player.r;
        player.y = height/2;
        player.rot = 'l';
      }
    }
}

function reset() {
  lvl = 0.009;
  tstage = 1;
  core.health = 5;
  score = 0;
  enemy = [];
  hint = 'Use WASD / Arrow Keys to move';
  if (!playing) {
    moosic.loop();
    playing = true;
  }
  enemy.push(new Enemy('a',0))
}

function makeEnemy(lvl,tstage) {
  let arr = [
  ['a','d'],
  ['s','d'],
  ['w','a','d'],
  ['w','a','s','d'],]
  if (tstage == 2) {
    for (let i = 0; i < arr[0].length; i++) {
      enemy.push(new Enemy(arr[0][i],0)) 
    }
  }else if (tstage == 3) {
      enemy.push(new Enemy('w',1)) 
  }else if (tstage == 4) {
    for (let i = 0; i < arr[1].length; i++) {
      enemy.push(new Enemy(arr[1][i],0)) 
    }
  }else if (tstage == 4) {
    for (let i = 0; i < arr[2].length; i++) {
      enemy.push(new Enemy(arr[2][i],0)) 
    }
  }else if (tstage == 5) {
    for (let i = 0; i < arr[3].length; i++) {
      enemy.push(new Enemy(arr[3][i],0)) 
    }
  }else if (tstage>5) {
    let opt = ['w','a','s','d']
    if (Math.random() < lvl) {
      if (Math.random() > 0.007) {
        enemy.push(new Enemy(opt[Math.floor(Math.random() * opt.length)],0))
        lvl += 0.0005
      }else{
        enemy.push(new Enemy(opt[Math.floor(Math.random() * opt.length)],1))
      }    
    }
  }
}


