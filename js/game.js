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
    this.fruit = new Fruit();
    this.levelBuilder = new LevelBuilder();
    this.headOnSpikeReverse = new HeadOnSpikeReverse();
    this.rock = new Rock();
    this.bigRock = new BigRock();
    this.pause = new Pause();
    this.exit = new Exit();
    this.highscore = new Highscore();
    this.sound = new Sound();
    this.level = 0;
    this.state = 0;
    this.gameClock = 0;
    this.gameoverTimer = 0;
  }
  update() {
    if (this.state === 1) {
      canvas.style.display = "block";
      this.gameClock += 1;
      this.background.update(this.context);
      this.fruit.update(this.context);
      this.checkBorderCollision();
      if (this.level === 1) {
        this.cliffLeft.update(this.context);
        this.cliffRight.update(this.context);
      }
      if (this.level === 2) {
        this.ropeReversed.update(this.context);
        this.headOnSpike.update(this.context);
        this.coconutTree.update(this.context);
      }
      if (this.level === 3) {
        this.bigCliff.update(this.context);
        this.rope.update(this.context);
        this.coconutTree.update(this.context);
      }
      if (this.level === 4) {
        this.coconutTree.update(this.context);
        this.headOnSpikeReverse.update(this.context);
        this.rock.update(this.context);
        this.bigRock.update(this.context);
      }
      this.monkeyLife.update(this.context);
      this.fuel.update(this.context);
      this.score.update(this.context);
      this.banana.update(this.context);
      this.bananaLeft.update(this.context);
      this.monkey.update(this.context);

      if (this.gameClock % 10 === 0) {
        this.banana.hang();
      }
      //after collecting all bananas
      if (game.banana.bananaLeftToCollect === 0) {
        this.landingSpace.update(this.context);
        this.landingSpace.landingCollision(this.monkey, this.landingSpace);
      }

      if (paused) {
        this.pause.update(this.context);
      }
    }
  }
  mainMenu() {
    if (this.state === 0) {
      menuDiv.style.display = "block";
      canvas.style.display = "none";
      this.level = 0;
    }
  }
  gameOver() {
    if (this.state === 2) {
      this.gameover.update(this.context);
    }
  }
  editor() {
    if (this.state === 3) {
      this.level = 5;
      canvas.style.display = "none";
      canvas.style.display = "block";
      this.levelBuilder.update(this.context);
    }
  }
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
      this.state = 2;
    }
  }
}

let game = new Game(context);

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowUp") {
    game.fuel.decreaseFuel();
    uppressed = true;
  }
  if (e.key === "ArrowRight") {
    game.fuel.decreaseFuel();
    rightpressed = true;
  }
  if (e.key === "ArrowLeft") {
    game.fuel.decreaseFuel();
    leftpressed = true;
  }
  if (e.keyCode === 80) {
    if (game.monkey.canPlay) {
      game.monkey.canPlay = false;
      paused = true;
    } else {
      game.monkey.canPlay = true;
      paused = false;
    }
  }
});

playButton.addEventListener("click", function () {
  game.state = 1;
});

document.onkeyup = function (e) {
  game.monkey.static();
  leftpressed = false;
  rightpressed = false;
  uppressed = false;
};

canvas.addEventListener("click", function (event) {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  if (game.levelBuilder.canDraw) {
    game.levelBuilder.drawImage(x, y);
  }
  game.levelBuilder.menu.exit(x, y);
  game.levelBuilder.menu.coconut(x, y);
  game.levelBuilder.menu.monkey(x, y);
  game.exit.quit(x, y);
  game.levelBuilder.menu.banana(x, y);
});

canvas.addEventListener("mousemove", function (event) {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  mx = event.clientX;
  my = event.clientY;
});

function gameOn() {
  game.update();
  game.mainMenu();
  game.gameOver();
  game.editor();
  requestAnimationFrame(gameOn);
}
gameOn();
