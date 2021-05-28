class HeadOnSpikeReverse {
  constructor() {
    this.image = new Image();
    this.image.src = "images/head-on-spike.png";
    this.x = 300;
    this.y = 325;
    this.sX = 0;
    this.sY = 0;
    this.width = 492;
    this.height = 207;
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

    if (
      game.collision.collide(game.monkey.monkeyPoly(), this.headOnSpikePoly())
    ) {
      game.dead();
    }
  }

  headOnSpikePoly() {
    var points = [
      { x: this.x + 2, y: this.y + 190 },
      { x: this.x + 4, y: this.y + 206 },
      { x: this.x + 473, y: this.y + 206 },
      { x: this.x + 481, y: this.y + 185 },
      { x: this.x + 488, y: this.y + 175 },
      { x: this.x + 491, y: this.y + 155 },
      { x: this.x + 486, y: this.y + 142 },
      { x: this.x + 470, y: this.y + 134 },
      { x: this.x + 476, y: this.y + 122 },
      { x: this.x + 460, y: this.y + 125 },
      { x: this.x + 463, y: this.y + 120 },
      { x: this.x + 463, y: this.y + 120 },
      { x: this.x + 455, y: this.y + 125 },
      { x: this.x + 459, y: this.y + 110 },
      { x: this.x + 455, y: this.y + 107 },
      { x: this.x + 445, y: this.y + 125 },
      { x: this.x + 440, y: this.y + 125 },
      { x: this.x + 433, y: this.y + 103 },
      { x: this.x + 433, y: this.y + 103 },
      { x: this.x + 436, y: this.y + 93 },
      { x: this.x + 432, y: this.y + 85 },
      { x: this.x + 427, y: this.y + 83 },
      { x: this.x + 418, y: this.y + 50 },
      { x: this.x + 421, y: this.y + 42 },
      { x: this.x + 415, y: this.y + 39 },
      { x: this.x + 425, y: this.y + 25 },
      { x: this.x + 422, y: this.y + 13 },
      { x: this.x + 428, y: this.y + 13 },
      { x: this.x + 431, y: this.y + 10 },
      { x: this.x + 430, y: this.y + 3 },
      { x: this.x + 425, y: this.y + 3 },
      { x: this.x + 417, y: this.y + 8 },
      { x: this.x + 408, y: this.y + 2 },
      { x: this.x + 400, y: this.y + 0 },
      { x: this.x + 391, y: this.y + 4 },
      { x: this.x + 379, y: this.y + 16 },
      { x: this.x + 372, y: this.y + 13 },
      { x: this.x + 366, y: this.y + 13 },
      { x: this.x + 362, y: this.y + 21 },
      { x: this.x + 368, y: this.y + 30 },
      { x: this.x + 373, y: this.y + 30 },
      { x: this.x + 380, y: this.y + 25 },
      { x: this.x + 386, y: this.y + 36 },
      { x: this.x + 400, y: this.y + 42 },
      { x: this.x + 403, y: this.y + 103 },
      { x: this.x + 416, y: this.y + 136 },
      { x: this.x + 409, y: this.y + 136 },
      { x: this.x + 409, y: this.y + 140 },
      { x: this.x + 398, y: this.y + 142 },
      { x: this.x + 398, y: this.y + 147 },
      { x: this.x + 350, y: this.y + 162 },
      { x: this.x + 310, y: this.y + 170 },
      { x: this.x + 220, y: this.y + 173 },
      { x: this.x + 150, y: this.y + 170 },
      { x: this.x + 125, y: this.y + 164 },
      { x: this.x + 85, y: this.y + 165 },
      { x: this.x + 35, y: this.y + 175 },
      { x: this.x + 4, y: this.y + 186 },
      { x: this.x + 2, y: this.y + 190 },
    ];
    var sides = game.collision.pointToSide(points);

    points.pop();

    return { p: points, s: sides };
  }
}
