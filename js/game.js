class Game{
    constructor(context){
        this.context = context
        this.background = new Background()
        this.monkeyLife = new MonkeyLife()
        this.fuel = new Fuel()
        this.monkey = new Monkey() 
        this.landingSpace = new LandingSpace()
        this.banana = new Banana()
        this.level = 0
        this.state = 1
    }
    update(){
        if(this.state === 1){
            this.background.update(this.context)
            this.monkeyLife.update(this.context)
            this.fuel.update(this.context)
            this.banana.update(this.context)
            this.monkey.update(this.context)
            this.checkBorderCollision()

            //after collecting all bananas
            this.landingSpace.update(this.context)
            landingCollision(this.monkey,this.landingSpace)
            bananaCollision(this.monkey,this.banana)
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

function landingCollision(rect1,rect2){
    if (rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y) {
         if(game.monkey.landingClock < 50 && (rect2.x + rect1.width - 28.9) < (rect1.x + rect1.width) && (rect2.x + rect2.width) > (rect1.x + rect1.width - 30.24)){
             //Stopping the gravity and speed 
            game.monkey.gravitySpeed = 0;
            game.monkey.gravity = 0;
            game.monkey.landingClock = 0
            game.monkey.xLeftSpeed = 0
            game.monkey.xRightSpeed = 0
            game.monkey.xGravity = 0
            game.monkey.xRightGravity = 0
            game.monkey.downThrust = 0

            
            game.monkey.static()

            
        }else{
             game.dead()
         }
     }         
}

function bananaCollision(rect1,rect2){
    for (let index = 0; index < game.banana.position[game.level].length; index++) {
        // console.log(rect2.position[game.level][index].y)
        if (rect1.x < rect2.position[game.level][index].x + rect2.width &&
            rect1.x + rect1.width > rect2.position[game.level][index].x &&
            rect1.y < rect2.position[game.level][index].y + rect2.height &&
            rect1.y + rect1.height > rect2.position[game.level][index].y) {
                console.log('kera khayo !')
            } 
    }        
}

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


console.log(game.banana.position[0].length)