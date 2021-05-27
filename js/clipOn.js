class ClipOn {
  constructor() {
    this.count = 0;
    this.backgroundImage = new Image();
    this.backgroundImage.src = "images/background.png";
  }
  update(ctx) {
    this.count += 10;
    var a = this.count;
    var b = this.count * 2;
    ctx.rect(0 + a, 0 + a, 993 - b, 530 - b);
    ctx.clip();
    ctx.drawImage(this.backgroundImage, 0, 0);
    ctx.clearRect(0, 0, 993, 530);
  }
}
