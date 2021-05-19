class Banana{
    constructor(){
        this.bananaImage = new Image()
        this.bananaImage.src = 'images/banana.png'
        this.position = [
            [
                {x:500,y:200},{x:800,y:300}
            ]    
        ]
        queueMicrotask
        this.animationPositionList = [
            {sX: 0, sY: 0},
            {sX: 0, sY: 48.24},
            {sX: 0, sY: 102.24},
            {sX: 0, sY: 159.24},
            {sX: 0, sY: 211.24}
        ]
        this.tick = 0;


        this.y = 100
        this.width = 30
        this.height = 30
        this.imageHeight = 48
        this.imageWidth = 270

        this.level = 0
        this.bananaLeftToCollect = this.position[this.level].length
    }
    update(ctx){
        let banana = this.animationPositionList[this.tick];
        if(game.state === 1){
            for (let index = 0; index < this.position[this.level]?.length; index++) {
                ctx.beginPath();
                ctx.fillStyle = "#66cc00";
                ctx.rect(this.position[this.level][index].x +this.width,this.position[this.level][index].y,this.width,this.height);
                ctx.drawImage(this.bananaImage,banana.sX,banana.sY,this.imageWidth,this.imageHeight,this.position[this.level][index].x,this.position[this.level][index].y,this.imageWidth,this.imageHeight)
                ctx.closePath()
            }
        }
    }

    hang(){
        this.tick = (this.tick + 1) % (this.animationPositionList.length);
    }

    
    bananaCollision(rect1, rect2) {
    for (
      let index = 0;
      index < game.banana.position[game.level].length;
      index++
    ) {
      if (
        rect1.x < rect2.position[game.level][index].x + rect2.width &&
        rect1.x + rect1.width > rect2.position[game.level][index].x &&
        rect1.y < rect2.position[game.level][index].y + rect2.height &&
        rect1.y + rect1.height > rect2.position[game.level][index].y
      ) {
        this.position[game.level].splice(index, 1);
        this.bananaLeftToCollect -= 1;
        score += 200;
      }
    }
  }

}



