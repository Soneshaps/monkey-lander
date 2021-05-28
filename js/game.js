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
    this.cliffLeft = new CliffLeft();
    this.cliffRight = new CliffRight();
    this.coconutTree = new CoconutTree();
    this.headOnSpike = new HeadOnSpike();
    this.bigCliff = new BigCliff();
    this.rope = new Rope();
    this.ropeReversed = new RopeR();
    this.gameover = new GameOver();
    this.reset = new Reset();

    this.levelBuilder = new LevelBuilder();
    this.headOnSpikeReverse = new HeadOnSpikeReverse();
    this.rock = new Rock();
    this.bigRock = new BigRock();
    this.pause = new Pause();
    this.exit = new Exit();
    this.highscore = new Highscore();
    this.sound = new Sound();
    this.levelFunction = new Level();
    this.level = 0;
    this.state = 0;
    this.gameClock = 0;
    this.gameoverTimer = 0;
    this.fruit = new Fruit(this);
  }
  update() {
    if (this.state != inGame) {
      return;
    }
    this.levelFunction.update(this.context);
  }
  mainMenu() {
    if (this.state != mainMenu) {
      return;
    }
    menuDiv.style.display = "block";
    canvas.style.display = "none";
    this.level = 0;
  }
  gameOver() {
    if (this.state != gameEnd) {
      return;
    }
    this.gameover.update(this.context);
  }
  editor() {
    if (this.state != 3) {
      return;
    }
    this.level = 5;
    canvas.style.display = "none";
    canvas.style.display = "block";
    this.levelBuilder.update(this.context);
  }
  checkBorderCollision() {
    let borderCollision =
      this.monkey.position[this.level].y < -80 ||
      this.monkey.position[this.level].y > 520 ||
      this.monkey.position[this.level].x < -130 ||
      this.monkey.position[this.level].x > 935;

    if (!borderCollision) {
      return;
    }
    this.dead();
  }

  checkPoint() {
    game.sound.spawn.play();
    this.monkey.position[this.level].y = this.monkey.checkpoint[this.level].y;
    this.monkey.position[this.level].x = this.monkey.checkpoint[this.level].x;
    this.fuel.fuelHealth = 300;
    this.monkey.gravitySpeed = 0;
    this.monkey.horizontalSpeed = 0;
    this.monkey.verticalSpeed = 0;
    this.monkey.verticalSpeedFactor = 0.05;
    this.monkey.horizontalSpeedFactor = 0.2;
  }

  dead() {
    game.sound.dead.play();
    if (this.monkeyLife.monkeyLeft > 0) {
      this.monkeyLife.monkeyLeft -= 1;
      this.checkPoint();
    } else {
      this.state = gameEnd;
    }
  }
}

let game = new Game(context);

function gameOn() {
  game.update();
  game.mainMenu();
  game.gameOver();
  game.editor();
  requestAnimationFrame(gameOn);
}

gameOn();
