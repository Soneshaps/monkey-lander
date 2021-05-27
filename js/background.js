class Background {
  constructor() {
    this.x = 0;
    this.y = 0;
  }
  update(ctx) {
    ctx.drawImage(backgroundImage, this.x, this.y);
  }
}
