class Pause {
  constructor() {
    this.pauseX = 420;
    this.pauseY = 250;
  }
  update(ctx) {
    ctx.font = "30px Nunito-ExtraBold";
    ctx.lineWidth = 5;
    ctx.fillStyle = "#ff6600";
    ctx.strokeStyle = "#ffffff";
    ctx.strokeText(`PAUSED`, this.pauseX, this.pauseY);
    ctx.fillText(`PAUSED`, this.pauseX, this.pauseY);
    ctx.lineWidth = 1;

    game.exit.update(game.context);
  }
}
