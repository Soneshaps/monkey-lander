class Rock {
  constructor() {
    this.image = new Image();
    this.image.src = "./images/rock.png";
    this.position = [{}, {}, {}, {}, { x: -1, y: -2 }];
    this.height = 122;
    this.width = 122;
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

    if (game.collision.collide(game.monkey.monkeyPoly(), this.rockPoly())) {
      game.dead();
    }
  }

  rockPoly() {
    let position = this.position[game.level];
    var points = [
      { x: position.x, y: position.y },
      { x: position.x + 120, y: position.y },
      {
        x: position.x + 111,
        y: position.y + 70,
      },
      {
        x: position.x + 112,
        y: position.y + 100,
      },
      {
        x: position.x + 107,
        y: position.y + 112,
      },
      {
        x: position.x + 85,
        y: position.y + 120,
      },
      {
        x: position.x + 25,
        y: position.y + 120,
      },
      { x: position.x, y: position.y + 116 },
      { x: position.x, y: position.y },
    ];

    var sides = game.collision.pointToSide(points);

    points.pop();

    return { p: points, s: sides };
  }
}
