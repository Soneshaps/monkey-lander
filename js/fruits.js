class Fruit {
  constructor() {
    this.image = new Image();
    this.fruitImgs = [
      "./images/cherry.png",
      "./images/lemon.png",
      "./images/pineapple.png",
    ];
    let fruitNo = Math.round(Math.random() * (this.fruitImgs.length - 1));

    this.image.src = this.fruitImgs[fruitNo];

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
    this.isSeen = true;
  }
  update(ctx, x, y) {
    if (this.isSeen) {
      ctx.drawImage(
        this.image,
        0,
        0,
        this.imageWidth,
        this.imageHeight,
        x,
        y,
        this.imageWidth,
        this.imageHeight
      );
      this.fruitCollision(game.monkey, this, x, y);
    }
  }

  fruitCollision(monkey, rect2, x, y) {
    let fruitCollision =
      monkey.position[game.level].x < x + rect2.width &&
      monkey.position[game.level].x + monkey.width > x &&
      monkey.position[game.level].y < y + rect2.height &&
      monkey.position[game.level].y + monkey.height > y;
    if (fruitCollision) {
      this.isSeen = false;
      score += fruitsPoint;
      game.sound.eat.play();
    }
  }
}
