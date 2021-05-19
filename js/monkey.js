class Monkey{
    constructor(){

        this.fuel = new Fuel();
        this.canPlay = true
        this.movementFactor = 0.2;
        this.horizontalSpeed = 0;
        this.horizontalSpeedFactor = 0.2;

        this.verticalSpeed = 0;
        this.verticalSpeedFactor = 0.05;

        this.width = 191.6;
        this.height = 105;
        this.sX = 0;
        this.sY = 0
        // this.tick = 0;

        this.monkeyImage = new Image();
        this.monkeyImage.src = 'images/monkey.png' 
        this.x = 50
        this.y = 50
        this.gravitySpeed = 0;
        this.gravity = 0.01;
        this.landingClock = 0

        // this.translateDegree = 0
        }
  
    update(ctx){
        console.log(this.landingClock)
        ctx.drawImage(this.monkeyImage,this.sX,this.sY,this.width,this.height,this.x,this.y,this.width,this.height);    
        if(!this.canPlay)
        return
        this.landingClock += 1
        this.y += this.gravitySpeed + this.verticalSpeed;
        this.gravitySpeed += this.gravity;    

        //vertical        
        if(uppressed)
            this.up();
        else{
            if(this.verticalSpeed < 0){
                this.verticalSpeed += this.verticalSpeedFactor;               
            }
        }

        //horizontal
        this.x += this.horizontalSpeed * this.movementFactor;

        if(rightpressed){
            this.right();
        }
        else if(leftpressed){
            this.left();
        }else{
            if (Math.abs(this.horizontalSpeed) > 0){
                if(this.horizontalSpeed > 0)
                    this.horizontalSpeed -=  this.horizontalSpeedFactor;
                else if(this.horizontalSpeed < 0)
                    this.horizontalSpeed +=  this.horizontalSpeedFactor;
            }
        }
    }

    static(){      
        this.sY = 0
    }

    up(){
        this.landingClock = 0
        this.verticalSpeed -= this.verticalSpeedFactor;

        this.sY = 124
    }

    left(){
    
        this.horizontalSpeed -=  this.horizontalSpeedFactor;
        this.sY = 389.8
    }

    right(){
       // this.gravitySpeed = this.gravitySpeed;
        this.horizontalSpeed +=  this.horizontalSpeedFactor;
        this.sY = 253.4
    }
    
}