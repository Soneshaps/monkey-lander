class GameOver {
  constructor() {
    this.image = new Image();
    this.image.src = "images/gameover-background.png";
    this.height = 530;
    this.width = 993;
    this.sX = 0;
    this.sY = 0;
    this.gameoverX = 260;
    this.gameoverY = 160;
    this.lineSecondX = 300;
    this.lineSecondY = 300;
    this.lineThirdX = 330;
    this.lineThirdY = 450;

    this.pointX = 450;
    this.pointY = 370;
  }
  update(ctx) {
    if (score > highscore) {
      highscore = score;
      localStorage.setItem("highScore", highscore);
    }
    ctx.drawImage(this.image, this.sX, this.sY, this.width, this.height);

    ctx.font = "72px Nunito-ExtraBold";
    ctx.lineWidth = 10;
    ctx.fillStyle = "#ff6600";
    ctx.strokeStyle = "#ffffff";
    ctx.strokeText(`GAME OVER`, this.gameoverX, this.gameoverY);
    ctx.fillText(`GAME OVER`, this.gameoverX, this.gameoverY);

    ctx.lineWidth = 5;
    ctx.font = "35px Nunito-ExtraBold";
    ctx.strokeText(`YOU MANAGED GET`, this.lineSecondX, this.lineSecondY);
    ctx.fillText(`YOU MANAGED GET`, this.lineSecondX, this.lineSecondY);

    ctx.font = "40px Nunito-ExtraBold";
    ctx.fillText(score, this.pointX, this.pointY);

    ctx.font = "35px Nunito-ExtraBold";
    ctx.strokeText(`MONKEY POINTS!`, this.lineThirdX, this.lineThirdY);
    ctx.fillText(`MONKEY POINTS!`, this.lineThirdX, this.lineThirdY);

    game.highscore.update(ctx);
    game.exit.update(ctx);
  }
}
