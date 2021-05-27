class Exit{
  constructor(){
    this.x = 940 
    this.y = 480
    this.radius = 35
    this.color = '#ff6600'
  }
  update(ctx){
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#ff6600'
    ctx.fillStyle = '#ffffff'
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill()
    ctx.closePath()

    ctx.font = "24px Nunito-ExtraBold";
    ctx.lineWidth = 2;
    ctx.fillStyle = this.color
    ctx.strokeStyle = "#ffffff";
    ctx.strokeText('EXIT', 910, 490);
    ctx.fillText('EXIT', 910, 490);
    ctx.lineWidth = 1
  }
  quit(xmouse,ymouse){
    const distance = Math.sqrt(
      ((xmouse-this.x)*(xmouse-this.x))+((ymouse-this.y)*(ymouse-this.y))
    )
    if(distance<this.radius){
      game.state = 0 
      game.reset.update()
    }
  }
}