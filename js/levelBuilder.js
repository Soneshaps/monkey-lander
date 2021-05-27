class LevelBuilder {
  constructor(context) {
    this.context = context;
    this.menu = new LevelBuilderMenu();
    this.canDraw = false;
    this.canPlace = false;
    this.coconutTree = false;
    this.monkey = false;
    this.imageWidth = 0;
    this.imageHeight = 0;
    this.sX = 0;
    this.sY = 0;
    this.image = new Image();
    this.image.src = "";
  }
  update(ctx) {
    game.level = 5;
    game.background.update(ctx);
    this.menu.update(ctx);
    if (this.canDraw) {
      ctx.drawImage(
        this.image,
        this.sX,
        this.sY,
        this.imageWidth,
        this.imageHeight,
        mx - this.imageWidth,
        my,
        this.imageWidth,
        this.imageHeight
      );
    }
    game.coconutTree.update(ctx);
    game.monkey.update(ctx);
  }
  drawImage(mouseX, mouseY) {
    this.x = mouseX;
    this.y = mouseY;
    if (this.canDraw) {
      var points = { x: mouseX - this.imageWidth / 2, y: mouseY };
      this.source[5] = points;
      this.canDraw = false;
    }
  }
}
