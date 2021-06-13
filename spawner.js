class Spawner{
    constructor(){
        this.scripted = [['a'],
                        ['a','d'],
                        ['w'],
                        ['s','d'],
                        ['w','a','d'],
                        ['w','a','s','d'],]
    }
    spawn(lvl){
        if (lvl <= this.scripted.length) {
            for (let i = 0; i < this.scripted[lvl]; i++) {
                console.log('aahhh')
                enemy.push(new Enemy(this.scripted[lvl][i],0))
            }
        }

    }
    debug(x,y,xdir,ydir,amount){
        for (let i = 0; i < amount; i++) {
            enemy.push(new Enemy(x,y,xdir,ydir))
        }
    }
}