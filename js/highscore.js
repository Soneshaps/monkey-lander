class Highscore {
  constructor() {
    this.highscoreX = 780;
    this.highscoreY = 40;
    this.scoreX = 850;
    this.scoreY = 80;
  }
  update(ctx) {
    ctx.font = "30px Nunito-ExtraBold";
    ctx.lineWidth = 7;
    ctx.fillStyle = "#ff6600";
    ctx.strokeStyle = "#ffffff";
    ctx.strokeText("HIGHSCORE", this.highscoreX, this.highscoreY);
    ctx.fillText("HIGHSCORE", this.highscoreX, this.highscoreY);

    ctx.font = "30px Nunito-ExtraBold";
    ctx.lineWidth = 7;
    ctx.fillStyle = "#ff6600";
    ctx.strokeStyle = "#ffffff";
    ctx.strokeText(highscore, this.scoreX, this.scoreY);
    ctx.fillText(highscore, this.scoreX, this.scoreY);
    ctx.lineWidth = 1;
  }
}
