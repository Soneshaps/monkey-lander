class Fuel{
    constructor(){
        this.fuelImage = new Image()
        this.fuelImage.src = 'images/fuel-bar.png'
        this.width = 235
        this.height = 27
        this.x = 735
        this.y = 55

        this.fuelHealth = 228

    }
    update(ctx){
        ctx.clearRect(735, 55, 235 , 27);
        ctx.beginPath();
        ctx.fillStyle = "#66cc00";
        ctx.rect(737.5, 59, this.fuelHealth, 20);
        ctx.fill()
        ctx.closePath();
        ctx.font = "14px Arial";
        ctx.fillStyle = "#ffffff";
        ctx.strokeStyle = "#ffffff";
        ctx.strokeText("COCONUT FUEL", 780, 74);
        ctx.drawImage(this.fuelImage,0,0,this.width,this.height,this.x,this.y,this.width,this.height)

        if(this.fuelHealth < 0){
            game.monkey.downThrust = 0
            game.monkey.xGravity = 0
            game.monkey.xRightGravity = 0
            game.monkey.xLeftSpeed = 0
            game.monkey.xRightSpeed = 0
        }
 
    }

    decreaseFuel(){
        if(this.fuelHealth > 0){
            this.fuelHealth -= .4
        }

    }

}