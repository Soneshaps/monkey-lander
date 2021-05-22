class Game {
  constructor(context) {
    this.context = context;
    this.background = new Background();
    this.monkeyLife = new MonkeyLife();
    this.fuel = new Fuel();
    this.monkey = new Monkey();
    this.landingSpace = new LandingSpace();
    this.banana = new Banana();
    this.bananaLeft = new BananaLeft();
    this.score = new Score();
    this.missionP = new MissionP();
    this.collision = new Collision();
    this.cliffLeft = new CliffLeft()
    this.cliffRight = new CliffRight()

    // this.test = new Test();
    this.level = 0;
    this.state = 1;
    this.gameClock = 0;
  
  }
  update() {
    if (this.state === 1) {
      this.gameClock += 1;
      this.background.update(this.context);
      this.monkeyLife.update(this.context);
      this.score.update(this.context);
      this.fuel.update(this.context);
      this.bananaLeft.update(this.context);
      this.banana.update(this.context);
      this.monkey.update(this.context);
      if(this.level === 1){
      this.cliffLeft.update(this.context)
      this.cliffRight.update(this.context)
      }


      this.checkBorderCollision();
      this.banana.bananaCollision(this.monkey, this.banana);

      if (this.gameClock % 10 === 0) {
        this.banana.hang();
      }
      //after collecting all bananas
      if (game.banana.bananaLeftToCollect === 0) {
        this.landingSpace.update(this.context);
        this.landingSpace.landingCollision(this.monkey, this.landingSpace);
      }
    }
    // if (this.state === 2) {
    //   this.background.update(this.context);
    // }
  }
  // gameOver(){

  // }
  checkBorderCollision() {
    if (
      this.monkey.position[this.level].y < -80 ||
      this.monkey.position[this.level].y > 520 ||
      this.monkey.position[this.level].x < -130 ||
      this.monkey.position[this.level].x > 935
    ) {
      this.dead();
    }
  }

  checkPoint() {
    this.monkey.position[this.level].y = this.monkey.checkpoint[this.level].y
    this.monkey.position[this.level].x  = this.monkey.checkpoint[this.level].x
    this.fuel.fuelHealth = 300;
    this.monkey.gravitySpeed = 0;
    this.monkey.horizontalSpeed = 0;
    this.monkey.verticalSpeed = 0;
    this.monkey.verticalSpeedFactor = 0.05
    this.monkey.horizontalSpeedFactor = 0.2
  }

  dead() {
    if (this.monkeyLife.monkeyLeft > 0) {
      this.monkeyLife.monkeyLeft -= 1;
      this.checkPoint();
    }else{
      this.state = 2
    }
  }


}

let game = new Game(context);


document.addEventListener('keydown',function(e){
  if(e.key === 'ArrowUp'){
    game.fuel.decreaseFuel()
      uppressed = true;
  }
  if(e.key === 'ArrowRight'){
      game.fuel.decreaseFuel()
      rightpressed = true;
  }
  if(e.key === 'ArrowLeft'){
      game.fuel.decreaseFuel()
      leftpressed = true;
  }
})


document.onkeyup = function (e) {
  game.monkey.static()
  leftpressed = false; 
  rightpressed = false; 
  uppressed = false;
};

function gameOn() {
  game.update();
  // game.gameOver()
  requestAnimationFrame(gameOn);
}
gameOn();

console.log(game.cliffRight.cliffRightPoly())