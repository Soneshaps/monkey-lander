class Banana {
  constructor() {
    this.bananaImage = new Image();
    this.bananaImage.src = "images/banana.png";
    this.position = [
      [
        { x: 500, y: 200 },
        { x: 800, y: 200 },
      ],
      [
        { x: 100, y: 250 },
        { x: 800, y: 250 },
      ],
      [
        { x: 60, y: 295 },
        { x: 900, y: 160 },
        { x: 650, y: 360 },
      ],
      [{ x: 60, y: 120 }],
      [
        { x: 60, y: 120 },
        { x: 300, y: 300 },
        { x: 610, y: 380 },
      ],
    ];

    this.animationPositionList = [
      { sX: 0, sY: 0 },
      { sX: 0, sY: 48.24 },
      { sX: 0, sY: 102.24 },
      { sX: 0, sY: 159.24 },
      { sX: 0, sY: 211.24 },
    ];
    this.tick = 0;

    this.y = 100;
    this.width = 25;
    this.height = 48;
    this.imageHeight = 48;
    this.imageWidth = 270;
  }
  update(ctx) {
    let position = this.position[game.level];
    this.bananaLeftToCollect = position.length;
    let banana = this.animationPositionList[this.tick];
    for (let index = 0; index < position?.length; index++) {
      ctx.drawImage(
        this.bananaImage,
        banana.sX,
        banana.sY,
        this.imageWidth,
        this.imageHeight,
        position[index].x,
        position[index].y,
        this.imageWidth,
        this.imageHeight
      );
    }
    this.bananaCollision(game.monkey, this);
  }

  hang() {
    this.tick = (this.tick + 1) % this.animationPositionList.length;
  }

  bananaCollision(rect1, rect2) {
    for (
      let index = 0;
      index < game.banana.position[game.level].length;
      index++
    ) {
      let bananaCollision =
        rect1.position[game.level].x <
          rect2.position[game.level][index].x + rect2.width &&
        rect1.position[game.level].x + rect1.width >
          rect2.position[game.level][index].x &&
        rect1.position[game.level].y <
          rect2.position[game.level][index].y + rect2.height &&
        rect1.position[game.level].y + rect1.height >
          rect2.position[game.level][index].y;
      if (bananaCollision) {
        this.position[game.level].splice(index, 1);
        this.bananaLeftToCollect -= 1;
        score += 200;
        game.sound.eat.play();
      }
    }
  }
}
