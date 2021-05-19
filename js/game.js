class Game{
    constructor(context){
        this.context = context
        this.background = new Background()
        this.monkeyLife = new MonkeyLife()
        this.fuel = new Fuel()
        this.monkey = new Monkey() 
        this.landingSpace = new LandingSpace()
        this.banana = new Banana()
        this.bananaLeft = new BananaLeft()
        this.score = new Score()
        this.missionP = new MissionP()
        this.level = 0
        this.state = 1
        this.gameClock = 0
    }
    update(){
        if(this.state === 1){
            this.gameClock += 1
            this.background.update(this.context)
            this.monkeyLife.update(this.context)
            this.fuel.update(this.context)
            this.bananaLeft.update(this.context)
            this.banana.update(this.context)
            // this.monkey.update(this.context)
            this.score.update(this.context)

            this.checkBorderCollision()
            this.bananaCollision(this.monkey,this.banana)
            
            if(this.gameClock % 6 === 0){
                this.banana.hang()
            }
            //after collecting all bananas
            if(game.banana.bananaLeftToCollect === 0){
                this.landingSpace.update(this.context)
                this.landingCollision(this.monkey,this.landingSpace)
            }
        }
        if(this.state === 2){
            this.background.update(this.context)
   
        }
    }
    // gameOver(){
     
    // }
    checkBorderCollision(){
        if(this.monkey.y < -80 || this.monkey.y > 520 || this.monkey.x < -130 || this.monkey.x > 935){
            this.monkey.xLeftSpeed = 0
            this.monkey.xRightSpeed = 0
            this.monkey.gravitySpeed = 0
            this.dead()
        }
    }

    checkPoint(){
        this.monkey.y = 200
        this.monkey.x = 200
        this.fuel.fuelHealth = 228
        this.monkey.downThrust = -0.12
        this.monkey.xGravity = 0.12
        this.monkey.xRightGravity = 0.12
    }

    landingCollision(rect1,rect2){
        if (rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.y + rect1.height > rect2.y) {
             if(this.monkey.landingClock < 50 && (rect2.x + rect1.width - 28.9) < (rect1.x + rect1.width) && (rect2.x + rect2.width) > (rect1.x + rect1.width - 30.24)){
                 //Stopping the gravity and speed 
                this.monkey.gravitySpeed = 0;
                this.monkey.gravity = 0;
                this.monkey.landingClock = 0
                this.monkey.xLeftSpeed = 0
                this.monkey.xRightSpeed = 0
                this.monkey.xGravity = 0
                this.monkey.xRightGravity = 0
                this.monkey.downThrust = 0
                this.monkey.static() 
                this.missionP.update(this.context)
                if(this.fuel.fuelHealth >= 0){
                    score += 1
                    this.fuel.decreaseFuel()
                }        
                }else{
                 this.dead()
             }
         }         
    }

    bananaCollision(rect1,rect2){
        for (let index = 0; index < this.banana.position[this.level].length; index++) {
            // console.log(rect2.position[this.level][index].y)
            if (rect1.x < rect2.position[this.level][index].x + rect2.width &&
                rect1.x + rect1.width > rect2.position[this.level][index].x &&
                rect1.y < rect2.position[this.level][index].y + rect2.height &&
                rect1.y + rect1.height > rect2.position[this.level][index].y) {
                    this.banana.position[this.level].splice(index,1)
                    this.banana.bananaLeftToCollect -= 1 
                    score += 200
                } 
        }        
    }

    dead(){
        if(this.monkeyLife.monkeyLeft > 0){
            this.monkeyLife.monkeyLeft -= 1
            this.checkPoint()
        }else{
            setTimeout(function(){
                this.state = 2
            }, 100).bind(this) //problem 
        }
    }

    fuelZero(){
        // this.
    }

}

let game = new Game(context)

// function respawnCondition(){
    
// }





document.addEventListener('keydown',function(e){
    if(e.key === 'ArrowUp'){
        game.monkey.up()
        game.fuel.decreaseFuel()
    }
    if(e.key === 'ArrowRight'){
        game.monkey.right()
        game.fuel.decreaseFuel()

    }
    if(e.key === 'ArrowLeft'){
        game.monkey.left()
        game.fuel.decreaseFuel()
    }
})


document.onkeyup = function (e) {
    game.monkey.static()
};



function gameOn(){
    game.update()
    // game.gameOver()
    requestAnimationFrame(gameOn)
}
gameOn()


