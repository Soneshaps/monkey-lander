class Fuel{
    constructor(){
        this.fuelImage = new Image()
        this.fuelImage.src = 'images/fuel-bar.png'
        this.width = 235
        this.height = 27
        this.x = 735
        this.y = 65

        this.fuelHealth = 228

    }
    update(ctx){
        ctx.beginPath()
        ctx.moveTo(680,70)
        ctx.lineTo(800,70)
        
        ctx.closePath()



        // ctx.clearRect(735, 60, 235 , 27);
        ctx.beginPath();
        ctx.fillStyle = "#66cc00";
        ctx.rect(737.5, 64, this.fuelHealth, 20);
        ctx.fill()
        ctx.closePath();
        ctx.font = "14px 'Nunito', sans-serif";
        ctx.fillStyle = "#ffffff";
        ctx.strokeStyle = "#ffffff";
        ctx.strokeText("COCONUT FUEL", 780, 78);

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
            this.fuelHealth -= .2
        }

    }

}