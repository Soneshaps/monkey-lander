class Fruit {
  constructor() {
    this.image = new Image();
    this.fruitImgs = [
      "./images/cherry.png",
      "./images/lemon.png",
      "./images/pineapple.png",
    ];
    this.fruitNo = Math.round(Math.random() * (this.fruitImgs.length - 1));

    this.position = [
      [{ x: 500, y: 250 }],
      [{ x: 500, y: 250 }],
      [{ x: 500, y: 250 }],
      [{ x: 500, y: 250 }],
      [{ x: 500, y: 250 }],
    ];

    this.width = 25;
    this.height = 48;
    this.imageHeight = 64;
    this.imageWidth = 270;
  }
  update(ctx) {
    this.image.src = this.fruitImgs[this.fruitNo];

    for (let index = 0; index < this.position[game.level]?.length; index++) {
      ctx.beginPath();
      ctx.fillStyle = "#66cc00";
      ctx.rect(
        this.position[game.level][index].x + this.width,
        this.position[game.level][index].y,
        this.width,
        this.height
      );
      ctx.drawImage(
        this.image,
        0,
        0,
        this.imageWidth,
        this.imageHeight,
        this.position[game.level][index].x,
        this.position[game.level][index].y,
        this.imageWidth,
        this.imageHeight
      );
      ctx.closePath();
    }
    this.fruitCollision(game.monkey, this);
  }

  fruitCollision(rect1, rect2) {
    let position = this.position[game.level];
    for (let index = 0; index < this.position[game.level].length; index++) {
      let fruitCollision =
        rect1.position[game.level].x <
          rect2.position[game.level][index].x + rect2.width &&
        rect1.position[game.level].x + rect1.width >
          rect2.position[game.level][index].x &&
        rect1.position[game.level].y <
          rect2.position[game.level][index].y + rect2.height &&
        rect1.position[game.level].y + rect1.height >
          rect2.position[game.level][index].y;
      if (fruitCollision) {
        this.position[game.level].splice(index, 1);
        score += 500;
        game.sound.eat.play();
      }
    }
  }
}
