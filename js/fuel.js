class Fuel {
  constructor() {
    this.fuelImage = new Image();
    this.fuelImage.src = "images/fuel-bar.png";
    this.fuelHealth = 300;
  }
  update(ctx) {
    ctx.beginPath();
    ctx.lineWidth = 2.5;
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#000000";
    ctx.moveTo(680, 70);
    ctx.arcTo(980, 70, 980, 100, 15);
    ctx.arcTo(980, 100, 666, 100, 15);
    ctx.arcTo(666, 100, 666, 70, 15);
    ctx.arcTo(666, 70, 980, 70, 15);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.lineWidth = 1;

    ctx.clearRect(672, 74, 300, 22);
    ctx.beginPath();
    ctx.fillStyle = "#66cc00";
    ctx.rect(672, 74, this.fuelHealth, 22);
    ctx.fill();
    ctx.closePath();

    ctx.font = "14px Nunito-Bold";
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#ffffff";
    ctx.strokeText("COCONUT FUEL", 770, 90);
    ctx.fillText("COCONUT FUEL", 770, 90);

    if (this.fuelHealth < 1) {
      game.monkey.verticalSpeedFactor = 0;
      game.monkey.horizontalSpeedFactor = 0;
    }
  }

  decreaseFuel() {
    if (this.fuelHealth > 0) {
      this.fuelHealth -= 1;
    }
  }
}
