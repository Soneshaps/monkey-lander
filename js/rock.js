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

    ctx.beginPath();
    ctx.moveTo(this.position[game.level].x, this.position[game.level].y);
    ctx.lineTo(this.position[game.level].x + 120, this.position[game.level].y);
    ctx.lineTo(
      this.position[game.level].x + 111,
      this.position[game.level].y + 70
    );
    ctx.lineTo(
      this.position[game.level].x + 112,
      this.position[game.level].y + 100
    );
    ctx.lineTo(
      this.position[game.level].x + 107,
      this.position[game.level].y + 112
    );
    ctx.lineTo(
      this.position[game.level].x + 85,
      this.position[game.level].y + 120
    );
    ctx.lineTo(
      this.position[game.level].x + 25,
      this.position[game.level].y + 120
    );
    ctx.lineTo(this.position[game.level].x, this.position[game.level].y + 116);
    ctx.lineTo(this.position[game.level].x, this.position[game.level].y);
    ctx.closePath();

    if (game.collision.collide(game.monkey.monkeyPoly(), this.rockPoly())) {
      game.dead();
    }
  }

  rockPoly() {
    var points = [
      { x: this.position[game.level].x, y: this.position[game.level].y },
      { x: this.position[game.level].x + 120, y: this.position[game.level].y },
      {
        x: this.position[game.level].x + 111,
        y: this.position[game.level].y + 70,
      },
      {
        x: this.position[game.level].x + 112,
        y: this.position[game.level].y + 100,
      },
      {
        x: this.position[game.level].x + 107,
        y: this.position[game.level].y + 112,
      },
      {
        x: this.position[game.level].x + 85,
        y: this.position[game.level].y + 120,
      },
      {
        x: this.position[game.level].x + 25,
        y: this.position[game.level].y + 120,
      },
      { x: this.position[game.level].x, y: this.position[game.level].y + 116 },
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
