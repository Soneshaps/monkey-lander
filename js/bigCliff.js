class BigCliff {
  constructor() {
    this.image = new Image();
    this.image.src = "images/big-cliff.png";
    this.sX = 0;
    this.sY = 0;
    this.width = 147;
    this.height = 219;
    this.x = -2;
    this.y = 320;
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
    if (game.collision.collide(game.monkey.monkeyPoly(), this.cliffPoly())) {
      game.dead();
    }
  }

  cliffPoly() {
    var points = [
      { x: this.x, y: this.y + 2 },
      { x: this.x + 27, y: this.y + 12 },
      { x: this.x + 80, y: this.y + 19 },
      { x: this.x + 115, y: this.y + 18 },
      { x: this.x + 140, y: this.y + 32 },
      { x: this.x + 147, y: this.y + 50 },
      { x: this.x + 135, y: this.y + 90 },
      { x: this.x + 116, y: this.y + 120 },
      { x: this.x + 103, y: this.y + 165 },
      { x: this.x + 106, y: this.y + 200 },
      { x: this.x + 99, y: this.y + 219 },
      { x: this.x, y: this.y + 219 },
      { x: this.x, y: this.y + 2 },
    ];

    var sides = game.collision.pointToSide(points);
    points.pop();

    return { p: points, s: sides };
  }
}
