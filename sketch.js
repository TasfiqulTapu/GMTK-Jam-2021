let menu,game,spn,player,core,lvl,tstage;
let enemy = [];
let currentScreen;

function setup() {
    createCanvas(980, 540);
    menu = new Menu();
    spn = new Spawner();
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
        // lvl = 1;
        // spn.spawn(lvl);
        reset()
        // if (enemy.length > 0) {
        //   console.log(enemy)
        // }
      }
    }else if (currentScreen == 'game') {
      // if (stars.length > 0) {
      //   for (let i = 0; i < stars.length; i++) {
      //     let xdiff = stars[i].x - mouseX;
      //     let ydiff = stars[i].y - mouseY;
      //     if (Math.abs(xdiff)>20 && Math.abs(ydiff)>20) {
      //       stars[i].highlighted = true;
      //     }
      //   }
      //}
    }
  }

function draw() {
    background(20);
  //  if (enemy.length > 0) {
  //    console.log(enemy)
  //  }

    if (currentScreen == 'menu') {
        menu.show();
    }else if (currentScreen == 'game') {
      
      spn.spawn(lvl);
        for (let i = 0; i < enemy.length; i++) {
          enemy[i].update(player,core);
          enemy[i].show();
          if (enemy[i].health == 0) {
            enemy.splice(i, 1);
            if (tstage == 1) {
              tstage = 2;
              makeEnemy(lvl, tstage)
            }
          }
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
    }else if (currentScreen == 'gameover') {
      rect(200,200,200,200)
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
    if (currentScreen == 'game') { 
       
      if (keyCode == 87) {
        player.x = width/2;
        player.y = height/2 - player.r;
        player.rot = 'w';
      } else if (keyCode == 83){
        player.x = width/2;
        player.y = height/2 + player.r;
        player.rot = 'w';
      }else if (keyCode == 65) {
        player.x = width/2 - player.r;
        player.y = height/2;
        player.rot = 'l';
      } else if (keyCode == 68){
        player.x = width/2 + player.r;
        player.y = height/2;
        player.rot = 'l';
      }
    }
}

function reset() {
  lvl = 0.009;
  tstage = 1;
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

