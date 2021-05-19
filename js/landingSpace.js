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
          rect1.x < rect2.x + rect2.width &&
          rect1.x + rect1.width > rect2.x &&
          rect1.y < rect2.y + rect2.height &&
          rect1.y + rect1.height > rect2.y
        ) {
          if (
            game.monkey.landingClock < 20 &&
            rect2.x + rect1.width - 28.9 < rect1.x + rect1.width &&
            rect2.x + rect2.width > rect1.x + rect1.width - 30.24
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
              }
            }
          } else {
            game.dead();
          }
        }
      }
}