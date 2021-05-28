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
      [{ x: 430, y: 250 }],
      [
        { x: 550, y: 300 },
        { x: 350, y: 300 },
      ],
      [
        { x: 880, y: 150 },
        { x: 670, y: 350 },
        { x: 350, y: 350 },
      ],
      [
        { x: 500, y: 60 },
        { x: 850, y: 250 },
        { x: 900, y: 450 },
      ],
      [
        { x: 250, y: 390 },
        { x: 580, y: 360 },
        { x: 650, y: 220 },
      ],
    ];

    this.width = 25;
    this.height = 48;
    this.imageHeight = 64;
    this.imageWidth = 270;
  }
  update(ctx) {
    for (let index = 0; index < this.position[game.level]?.length; index++) {
      this.image.src = this.fruitImgs[this.fruitNo];
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
    }
    this.fruitCollision(game.monkey, this);
  }

  fruitCollision(rect1, rect2) {
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
        score += fruitsPoint;
        game.sound.eat.play();
      }
    }
  }
}
