class Monkey{
    constructor(){

        this.fuel = new Fuel();

        this.width = 191.6;
        this.height = 105;
        this.sX = 0;
        this.sY = 0
        // this.tick = 0;
        this.staticMonkeyX = 0
        this.staticMonkeyY = 0
        this.monkeyImage = new Image();
        this.monkeyImage.src = 'images/monkey.png' 
        this.x = 50
        this.y = 50
        this.gravitySpeed = 0;
        this.gravity = 0.0098;
        this.landingClock = 0

        this.xLeftSpeed = 0
        this.xRightSpeed = 0

        this.xGravity = 0.15
        this.xRightGravity = 0.15

        this.translateDegree = 0
        this.downThrust = -0.12
        }
  
    update(ctx){
        this.landingClock += 1

        // // if(game.gameState === 1){
                this.y += this.gravitySpeed;

        this.gravitySpeed += this.gravity;
            
        // // }
        // ctx.translate(this.x,this.y)
        // ctx.rotate(this.translateDegree)
        ctx.drawImage(this.monkeyImage,this.sX,this.sY,this.width,this.height,this.x,this.y,this.width,this.height)
        // ctx.rotate(-this.translateDegree)
        // ctx.translate(-this.x,-this.y)

    }
    static(){
        this.gravitySpeed = this.gravitySpeed
        this.gravity = 0.0098;
        this.xLeftSpeed = 0
        this.xRightSpeed = 0
        this.sY = 0


    }

    up(){
        this.landingClock = 0
        this.gravitySpeed = this.gravitySpeed
        this.y += this.gravitySpeed
        this.gravitySpeed += this.downThrust

        this.sY = 124
    }

    left(){
        this.gravitySpeed = this.gravitySpeed /1.05 

        this.x -= this.xRightSpeed;
        if(this.xRightSpeed > 3.8){
            this.xRightGravity = 0
        }else{
            this.xRightGravity = 0.07
        }
        this.xRightSpeed += this.xRightGravity;
        this.sY = 389.8

    }
    right(){
        this.gravitySpeed = this.gravitySpeed /1.05 

        this.x += this.xLeftSpeed;
        if(this.xLeftSpeed > 3.8){
            this.xGravity = 0
        }else{
            this.xGravity = 0.07
        }
        this.xLeftSpeed += this.xGravity;
        this.sY = 253.4

    }
}