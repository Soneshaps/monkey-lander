class Rope {
  constructor() {
    this.image = new Image();
    this.image.src = "images/rope.png";
    this.sX = 0;
    this.sY = 0;
    this.width = 157;
    this.height = 172;
    this.x = -1;
    this.y = -1;
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

    //drawing polygon

    if (game.collision.collide(game.monkey.monkeyPoly(), this.ropePoly())) {
      game.dead();
    }
  }

  ropePoly() {
    var points = [
      { x: this.x, y: this.y },
      { x: this.x + 157, y: this.y },
      { x: this.x + 130, y: this.y + 50 },
      { x: this.x + 93, y: this.y + 100 },
      { x: this.x + 30, y: this.y + 150 },
      { x: this.x, y: this.y + 172 },
      { x: this.x, y: this.y },
    ];

    var sides = game.collision.pointToSide(points);
    points.pop();

    return { p: points, s: sides };
  }
}
