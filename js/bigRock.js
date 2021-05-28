class BigRock {
  constructor() {
    this.image = new Image();
    this.image.src = "./images/big-rock.png";

    this.position = [{}, {}, {}, {}, { x: 372, y: -1 }];
    this.x = 372;
    this.y = -1;
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
      this.x,
      this.y,
      this.width,
      this.height
    );

    if (game.collision.collide(game.monkey.monkeyPoly(), this.bigRockPoly())) {
      game.dead();
    }
  }

  bigRockPoly() {
    var points = [
      { x: this.x, y: this.y },
      {
        x: this.x + 52,
        y: this.y + 60,
      },
      {
        x: this.x + 66,
        y: this.y + 73,
      },
      {
        x: this.x + 66,
        y: this.y + 150,
      },
      {
        x: this.x + 75,
        y: this.y + 170,
      },
      {
        x: this.x + 88,
        y: this.y + 176,
      },
      {
        x: this.x + 135,
        y: this.y + 182,
      },
      {
        x: this.x + 190,
        y: this.y + 175,
      },
      {
        x: this.x + 222,
        y: this.y + 162,
      },
      {
        x: this.x + 300,
        y: this.y + 182,
      },
      {
        x: this.x + 400,
        y: this.y + 183,
      },
      {
        x: this.x + 450,
        y: this.y + 174,
      },
      {
        x: this.x + 500,
        y: this.y + 156,
      },
      {
        x: this.x + 555,
        y: this.y + 139,
      },
      {
        x: this.x + 600,
        y: this.y + 118,
      },
      {
        x: this.x + 621,
        y: this.y + 118,
      },
      { x: this.x + 621, y: this.y },
      { x: this.x, y: this.y },
    ];
    var sides = game.collision.pointToSide(points);
    points.pop();

    return { p: points, s: sides };
  }
}
