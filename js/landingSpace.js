class LandingSpace{
    constructor(){
        this.landingSpaceImg = new Image()
        this.landingSpaceImg.src = "images/landing-space.png"
        this.timer = 0
        this.x = 760
        this.y = 450

        this.height = 25
        this.width = 202
    }
    update(ctx){
        ctx.drawImage(this.landingSpaceImg,0,0,this.width,this.height,this.x,this.y,this.width,this.height)
    }

    landingCollision(rect1, rect2) {
        if (
          rect1.position[game.level].x < rect2.x + rect2.width &&
          rect1.position[game.level].x + rect1.width > rect2.x &&
          rect1.position[game.level].y < rect2.y + rect2.height &&
          rect1.position[game.level].y + rect1.height > rect2.y
        ) {
          if (
            game.monkey.landingClock < 20 &&
            rect2.x + rect1.width - 28.9 < rect1.position[game.level].x + rect1.width &&
            rect2.x + rect2.width > rect1.position[game.level].x + rect1.width - 30.24
          ) {
            //timer ON
            this.timer += 1
            //Stopping the monkey movement
            game.monkey.canPlay = false
            //changing the Sprite
            game.monkey.static();
            if(this.timer>50){
              game.missionP.update(game.context);
              if (game.fuel.fuelHealth > 0) {
                score += 1;
                game.fuel.decreaseFuel();
              }else{
                game.level +=1
                game.fuel.fuelHealth = 300
                game.monkey.verticalSpeedFactor = 0.05
                game.monkey.horizontalSpeedFactor = 0.2
                game.monkey.horizontalSpeed = 0;
                game.monkey.verticalSpeed = 0;
                game.monkey.gravitySpeed = 0;
                game.monkey.canPlay = true
                this.timer = 0  
              }
            }
          } else {
            game.dead();
          }
        }
      }
}