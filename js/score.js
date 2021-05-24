class Score {
  constructor() {
    this.y = 25;
  }
  update(ctx) {
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 2.5;

    ctx.beginPath();

    ctx.moveTo(790, this.y);
    ctx.arcTo(980, this.y, 980, 65, 20);
    ctx.arcTo(980, 65, 770, 65, 20);
    ctx.arcTo(770, 65, 770, this.y, 20);
    ctx.arcTo(770, this.y, 980, this.y, 20);
    ctx.fill();
    ctx.stroke();

    ctx.lineWidth = 1;

    ctx.font = "12px Nunito";
    ctx.fillStyle = "#ff6600";
    ctx.strokeStyle = "#ff6600";
    ctx.strokeText("POINTS", 845, 18);
    ctx.fillText("POINTS", 845, 18);
    ctx.font = "30px Nunito-ExtraBold";
    ctx.fillText(score, 860, 55);
  }
}
