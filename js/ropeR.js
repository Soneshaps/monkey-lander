class RopeR {
  constructor() {
    this.image = new Image();
    this.image.src = "images/rope.png";
    this.sX = 0;
    this.sY = 173;
    this.width = 157;
    this.height = 172;
    this.x = 837;
    this.y = 0;
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

    if (game.collision.collide(game.monkey.monkeyPoly(), this.ropePoly())) {
      game.dead();
    }
  }

  ropePoly() {
    var points = [
      { x: this.x, y: this.y },
      { x: this.x + 27, y: this.y + 50 },
      { x: this.x + 56, y: this.y + 90 },
      { x: this.x + 99, y: this.y + 130 },
      { x: this.x + 128, y: this.y + 150 },
      { x: this.x + 157, y: this.y + 172 },
      { x: this.x + 157, y: this.y },
      { x: this.x, y: this.y },
    ];

    var sides = game.collision.pointToSide(points);
    points.pop();

    return { p: points, s: sides };
  }
}
