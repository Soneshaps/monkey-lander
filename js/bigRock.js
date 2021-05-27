class BigRock {
  constructor() {
    this.image = new Image();
    this.image.src = "./images/big-rock.png";

    this.position = [{}, {}, {}, {}, { x: 372, y: -1 }];
    this.height = 185;
    this.width = 623;
    this.sX = 0;
    this.sY = 0;
  }
  update(ctx) {
    ctx.drawImage(
      this.image,
      this.sX,
      this.sY,
      this.width,
      this.height,
      this.position[game.level].x,
      this.position[game.level].y,
      this.width,
      this.height
    );

    ctx.beginPath();
    ctx.moveTo(this.position[game.level].x, this.position[game.level].y);
    ctx.lineTo(
      this.position[game.level].x + 52,
      this.position[game.level].y + 60
    );
    ctx.lineTo(
      this.position[game.level].x + 66,
      this.position[game.level].y + 73
    );
    ctx.lineTo(
      this.position[game.level].x + 66,
      this.position[game.level].y + 150
    );
    ctx.lineTo(
      this.position[game.level].x + 75,
      this.position[game.level].y + 170
    );
    ctx.lineTo(
      this.position[game.level].x + 88,
      this.position[game.level].y + 176
    );
    ctx.lineTo(
      this.position[game.level].x + 135,
      this.position[game.level].y + 182
    );
    ctx.lineTo(
      this.position[game.level].x + 190,
      this.position[game.level].y + 175
    );
    ctx.lineTo(
      this.position[game.level].x + 222,
      this.position[game.level].y + 162
    );
    ctx.lineTo(
      this.position[game.level].x + 300,
      this.position[game.level].y + 182
    );
    ctx.lineTo(
      this.position[game.level].x + 400,
      this.position[game.level].y + 183
    );
    ctx.lineTo(
      this.position[game.level].x + 450,
      this.position[game.level].y + 174
    );
    ctx.lineTo(
      this.position[game.level].x + 500,
      this.position[game.level].y + 156
    );
    ctx.lineTo(
      this.position[game.level].x + 555,
      this.position[game.level].y + 139
    );
    ctx.lineTo(
      this.position[game.level].x + 600,
      this.position[game.level].y + 118
    );
    ctx.lineTo(
      this.position[game.level].x + 621,
      this.position[game.level].y + 118
    );
    ctx.lineTo(this.position[game.level].x + 621, this.position[game.level].y);
    ctx.lineTo(this.position[game.level].x, this.position[game.level].y);
    ctx.closePath();

    if (game.collision.collide(game.monkey.monkeyPoly(), this.bigRockPoly())) {
      game.dead();
    }
  }

  bigRockPoly() {
    var points = [
      { x: this.position[game.level].x, y: this.position[game.level].y },
      {
        x: this.position[game.level].x + 52,
        y: this.position[game.level].y + 60,
      },
      {
        x: this.position[game.level].x + 66,
        y: this.position[game.level].y + 73,
      },
      {
        x: this.position[game.level].x + 66,
        y: this.position[game.level].y + 150,
      },
      {
        x: this.position[game.level].x + 75,
        y: this.position[game.level].y + 170,
      },
      {
        x: this.position[game.level].x + 88,
        y: this.position[game.level].y + 176,
      },
      {
        x: this.position[game.level].x + 135,
        y: this.position[game.level].y + 182,
      },
      {
        x: this.position[game.level].x + 190,
        y: this.position[game.level].y + 175,
      },
      {
        x: this.position[game.level].x + 222,
        y: this.position[game.level].y + 162,
      },
      {
        x: this.position[game.level].x + 300,
        y: this.position[game.level].y + 182,
      },
      {
        x: this.position[game.level].x + 400,
        y: this.position[game.level].y + 183,
      },
      {
        x: this.position[game.level].x + 450,
        y: this.position[game.level].y + 174,
      },
      {
        x: this.position[game.level].x + 500,
        y: this.position[game.level].y + 156,
      },
      {
        x: this.position[game.level].x + 555,
        y: this.position[game.level].y + 139,
      },
      {
        x: this.position[game.level].x + 600,
        y: this.position[game.level].y + 118,
      },
      {
        x: this.position[game.level].x + 621,
        y: this.position[game.level].y + 118,
      },
      { x: this.position[game.level].x + 621, y: this.position[game.level].y },
      { x: this.position[game.level].x, y: this.position[game.level].y },
    ];
    var sides = [];
    for (let i = 0; i < points.length - 1; i++) {
      sides.push([
        { x: points[i].x, y: points[i].y },
        { x: points[i + 1].x, y: points[i + 1].y },
      ]);
    }
    points.pop();

    return { p: points, s: sides };
  }
}
