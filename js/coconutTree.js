class CoconutTree {
  constructor() {
    this.image = new Image();
    this.image.src = "images/coconut-tree.png";
    this.position = [
      {},
      {},
      { x: -70, y: 100 },
      { x: 480, y: 140 },
      { x: -20, y: 190 },
      {},
    ];
    this.sX = 0;
    this.sY = 0;
    this.width = 278;
    this.height = 437;
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

    if (game.collision.collide(game.monkey.monkeyPoly(), this.coconutPoly())) {
      game.dead();
    }
  }
  coconutPoly() {
    let position = this.position[game.level];

    //tracing polygon points for coconut tree
    let points = [
      { x: position.x + 100, y: position.y },
      {
        x: position.x + 130,
        y: position.y + 7,
      },
      {
        x: position.x + 162,
        y: position.y + 31,
      },
      {
        x: position.x + 220,
        y: position.y + 36,
      },
      {
        x: position.x + 180,
        y: position.y + 52,
      },
      {
        x: position.x + 230,
        y: position.y + 70,
      },
      {
        x: position.x + 260,
        y: position.y + 100,
      },
      {
        x: position.x + 275,
        y: position.y + 125,
      },
      {
        x: position.x + 220,
        y: position.y + 105,
      },
      {
        x: position.x + 190,
        y: position.y + 105,
      },
      {
        x: position.x + 220,
        y: position.y + 145,
      },
      {
        x: position.x + 225,
        y: position.y + 175,
      },
      {
        x: position.x + 200,
        y: position.y + 145,
      },
      {
        x: position.x + 173,
        y: position.y + 140,
      },
      {
        x: position.x + 173,
        y: position.y + 180,
      },
      {
        x: position.x + 166,
        y: position.y + 195,
      },
      {
        x: position.x + 136,
        y: position.y + 128,
      },
      {
        x: position.x + 100,
        y: position.y + 200,
      },
      {
        x: position.x + 88,
        y: position.y + 250,
      },
      {
        x: position.x + 87,
        y: position.y + 315,
      },
      {
        x: position.x + 102,
        y: position.y + 380,
      },
      {
        x: position.x + 130,
        y: position.y + 435,
      },
      {
        x: position.x + 77,
        y: position.y + 435,
      },
      {
        x: position.x + 63,
        y: position.y + 300,
      },
      {
        x: position.x + 70,
        y: position.y + 220,
      },
      {
        x: position.x + 78,
        y: position.y + 189,
      },
      {
        x: position.x + 57,
        y: position.y + 189,
      },
      {
        x: position.x + 57,
        y: position.y + 210,
      },
      {
        x: position.x + 47,
        y: position.y + 180,
      },
      {
        x: position.x + 52,
        y: position.y + 150,
      },
      {
        x: position.x + 25,
        y: position.y + 150,
      },
      {
        x: position.x + 5,
        y: position.y + 180,
      },
      {
        x: position.x + 10,
        y: position.y + 140,
      },
      {
        x: position.x + 30,
        y: position.y + 103,
      },
      {
        x: position.x + 70,
        y: position.y + 68,
      },
      {
        x: position.x + 1,
        y: position.y + 72,
      },
      {
        x: position.x + 38,
        y: position.y + 43,
      },
      {
        x: position.x + 90,
        y: position.y + 31,
      },
      {
        x: position.x + 120,
        y: position.y + 31,
      },
      {
        x: position.x + 113,
        y: position.y + 10,
      },
      { x: position.x + 100, y: position.y },
    ];
    let sides = game.collision.pointToSide(points);

    points.pop();

    return { p: points, s: sides };
  }
}
