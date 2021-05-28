class Monkey {
  constructor() {
    this.fuel = new Fuel();
    this.canPlay = true;
    this.movementFactor = 0.2;
    this.horizontalSpeed = 0;
    this.horizontalSpeedFactor = 0.2;

    this.verticalSpeed = 0;
    this.verticalSpeedFactor = 0.05;

    this.width = 191.6;
    this.height = 105;
    this.sX = 0;
    this.sY = 0;
    // this.tick = 0;

    this.monkeyImage = new Image();
    this.monkeyImage.src = "images/monkey.png";
    this.position = [
      { x: 90, y: -40 },
      { x: 90, y: -40 },
      { x: 90, y: -40 },
      { x: 190, y: -40 },
      { x: 150, y: -40 },
      {},
    ];
    this.checkpoint = [
      { x: 90, y: -40 },
      { x: 90, y: -40 },
      { x: 90, y: -40 },
      { x: 190, y: -40 },
      { x: 150, y: -40 },
      {},
    ];
    this.gravitySpeed = 0;
    this.gravity = 0.01;
    this.landingClock = 0;

    // this.translateDegree = 0
  }

  update(ctx) {
    //Monkey Polygon
    ctx.beginPath();
    ctx.moveTo(this.position[game.level].x + 100, this.position[game.level].y);
    ctx.lineTo(
      this.position[game.level].x + 130,
      this.position[game.level].y + 7
    );
    ctx.lineTo(
      this.position[game.level].x + 145,
      this.position[game.level].y + 33
    );
    ctx.lineTo(
      this.position[game.level].x + 173,
      this.position[game.level].y + 52
    );
    ctx.lineTo(
      this.position[game.level].x + 175,
      this.position[game.level].y + 75
    );
    ctx.lineTo(
      this.position[game.level].x + 160,
      this.position[game.level].y + 78
    );
    ctx.lineTo(
      this.position[game.level].x + 160,
      this.position[game.level].y + 78
    );
    ctx.lineTo(
      this.position[game.level].x + 165,
      this.position[game.level].y + 98
    );
    ctx.lineTo(
      this.position[game.level].x + 132,
      this.position[game.level].y + 108
    );
    ctx.lineTo(
      this.position[game.level].x + 125,
      this.position[game.level].y + 90
    );
    ctx.lineTo(
      this.position[game.level].x + 60,
      this.position[game.level].y + 90
    );
    ctx.lineTo(
      this.position[game.level].x + 57,
      this.position[game.level].y + 108
    );
    ctx.lineTo(
      this.position[game.level].x + 27,
      this.position[game.level].y + 95
    );
    ctx.lineTo(
      this.position[game.level].x + 30,
      this.position[game.level].y + 77
    );
    ctx.lineTo(
      this.position[game.level].x + 17,
      this.position[game.level].y + 70
    );
    ctx.lineTo(
      this.position[game.level].x + 15,
      this.position[game.level].y + 55
    );
    ctx.lineTo(
      this.position[game.level].x + 30,
      this.position[game.level].y + 35
    );
    ctx.lineTo(
      this.position[game.level].x + 52,
      this.position[game.level].y + 27
    );
    ctx.lineTo(
      this.position[game.level].x + 60,
      this.position[game.level].y + 10
    );
    ctx.lineTo(
      this.position[game.level].x + 75,
      this.position[game.level].y + 2
    );
    ctx.lineTo(this.position[game.level].x + 100, this.position[game.level].y);
    ctx.closePath();

    //Image
    ctx.drawImage(
      this.monkeyImage,
      this.sX,
      this.sY,
      this.width,
      this.height,
      this.position[game.level].x,
      this.position[game.level].y,
      this.width,
      this.height
    );
    //If can Play is true -> gravity and thrust controls
    if (this.canPlay) {
      this.landingClock += 1;
      this.position[game.level].y += this.gravitySpeed + this.verticalSpeed;
      this.gravitySpeed += this.gravity;

      //vertical
      if (uppressed) {
        game.sound.startUp.play();
        this.up();
      } else {
        game.sound.startUp.pause();
        if (this.verticalSpeed < 0) {
          this.verticalSpeed += this.verticalSpeedFactor;
        }
      }

      //horizontal
      this.position[game.level].x += this.horizontalSpeed * this.movementFactor;

      if (rightpressed) {
        this.right();
      } else if (leftpressed) {
        this.left();
      } else {
        game.sound.start.pause();
        if (Math.abs(this.horizontalSpeed) > 0) {
          if (this.horizontalSpeed > 0)
            this.horizontalSpeed -= this.horizontalSpeedFactor;
          else if (this.horizontalSpeed < 0)
            this.horizontalSpeed += this.horizontalSpeedFactor;
        }
      }

      if (rightpressed && uppressed) {
        this.upRight();
      }
      if (leftpressed && uppressed) {
        this.upLeft();
      }
    }
  }

  static() {
    this.sY = 0;
  }

  up() {
    this.landingClock = 0;
    this.verticalSpeed -= this.verticalSpeedFactor;
    this.sY = 124;
  }

  left() {
    this.horizontalSpeed -= this.horizontalSpeedFactor;
    this.sY = 389.8;
    game.sound.start.play();
  }

  right() {
    // this.gravitySpeed = this.gravitySpeed;
    this.horizontalSpeed += this.horizontalSpeedFactor;
    this.sY = 253.4;
    game.sound.start.play();
  }

  landed() {
    this.sY = 523.5;
  }

  upRight() {
    this.sY = 662.25;
  }

  upLeft() {
    this.sY = 798.55;
  }

  monkeyPoly() {
    let position = this.position[game.level];
    var points = [
      { x: position.x + 100, y: position.y },
      {
        x: position.x + 130,
        y: position.y + 7,
      },
      {
        x: position.x + 145,
        y: position.y + 33,
      },
      {
        x: position.x + 173,
        y: position.y + 52,
      },
      {
        x: position.x + 175,
        y: position.y + 75,
      },
      {
        x: position.x + 160,
        y: position.y + 78,
      },
      {
        x: position.x + 165,
        y: position.y + 98,
      },
      {
        x: position.x + 132,
        y: position.y + 108,
      },
      {
        x: position.x + 125,
        y: position.y + 90,
      },
      {
        x: position.x + 60,
        y: position.y + 90,
      },
      {
        x: position.x + 57,
        y: position.y + 108,
      },
      {
        x: position.x + 27,
        y: position.y + 95,
      },
      {
        x: position.x + 30,
        y: position.y + 77,
      },
      {
        x: position.x + 17,
        y: position.y + 70,
      },
      {
        x: position.x + 15,
        y: position.y + 55,
      },
      {
        x: position.x + 30,
        y: position.y + 35,
      },
      {
        x: position.x + 52,
        y: position.y + 27,
      },
      {
        x: position.x + 60,
        y: position.y + 10,
      },
      {
        x: position.x + 72,
        y: position.y + 2,
      },
    ];
    var sides = game.collision.pointToSide(points);
    points.pop();

    return { p: points, s: sides };
  }
}
