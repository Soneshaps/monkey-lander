class BananaLeft {
  constructor() {
    // this.x = 660
    // this.y = 25
    // this.width = 100
    // this.height = 30
  }
  update(ctx) {
    ctx.beginPath();
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 2.5;
    ctx.moveTo(680, 25);
    ctx.arcTo(760, 25, 760, 65, 20);
    ctx.arcTo(760, 65, 660, 65, 20);
    ctx.arcTo(660, 65, 660, 25, 20);
    ctx.arcTo(660, 25, 760, 25, 20);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.lineWidth = 1;
    ctx.font = "12px Nunito";
    ctx.fillStyle = "#ff6600";
    ctx.strokeStyle = "#ff6600";
    ctx.fillText("BANANA LEFT", 668, 18);
    ctx.strokeText("BANANA LEFT", 668, 18);
    ctx.font = "30px Nunito-Bold";
    ctx.strokeText(game.banana.bananaLeftToCollect, 700, 55);
    ctx.fillText(game.banana.bananaLeftToCollect, 700, 55);
  }
}
