class LevelBuilderMenu {
  constructor() {
    this.exitX = 910;
    this.exitY = 355;
    this.radius = 35;
    this.coconutX = 300;
    this.coconutY = 45;
    this.monkeyX = 390;
    this.monkeyY = 45;
    this.radius = 35;
    this.exitColor = "#ffffff";
  }
  update(ctx) {
    ctx.beginPath();
    ctx.rect(850, 100, 120, 300);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(250, 5, 600, 80);
    ctx.stroke();
    ctx.closePath();

    //exit
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.arc(this.exitX, this.exitY, this.radius, 0, 2 * Math.PI);
    ctx.rect(this.exitX, this.exitY, this.height, this.height);
    ctx.stroke();
    ctx.closePath();

    ctx.font = "22px Nunito-ExtraBold";
    ctx.lineWidth = 2;
    ctx.fillStyle = "#ff6600";
    ctx.strokeStyle = "#ffffff";
    ctx.strokeText("EXIT", 882, 362);
    ctx.fillText("EXIT", 882, 362);
    ctx.lineWidth = 1;

    //monkey
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.arc(this.monkeyX, this.monkeyY, this.radius, 0, 2 * Math.PI);
    ctx.rect(this.monkeyX, this.monkeyY, this.height, this.height);
    ctx.stroke();
    ctx.closePath();

    ctx.font = "32px Nunito-ExtraBold";
    ctx.lineWidth = 2;
    ctx.fillStyle = "#ff6600";
    ctx.strokeStyle = "#ffffff";
    ctx.strokeText("M", 375, 58);
    ctx.fillText("M", 375, 58);
    ctx.lineWidth = 1;

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.arc(this.coconutX, this.coconutY, this.radius, 0, 2 * Math.PI);
    ctx.rect(this.coconutX, this.coconutY, this.height, this.height);
    ctx.stroke();
    ctx.closePath();

    ctx.font = "32px Nunito-ExtraBold";
    ctx.lineWidth = 2;
    ctx.fillStyle = "#ff6600";
    ctx.strokeStyle = "#ffffff";
    ctx.strokeText("C", 288, 58);
    ctx.fillText("C", 288, 58);
    ctx.lineWidth = 1;
  }

  exit(xmouse, ymouse) {
    const distance = Math.sqrt(
      (xmouse - this.exitX) * (xmouse - this.exitX) +
        (ymouse - this.exitY) * (ymouse - this.exitY)
    );
    if (distance < this.radius) {
      game.state = 0;
    }
  }

  coconut(xmouse, ymouse) {
    const distance = Math.sqrt(
      (xmouse - this.coconutX) * (xmouse - this.coconutX) +
        (ymouse - this.coconutY) * (ymouse - this.coconutY)
    );
    if (distance < this.radius) {
      if (!game.levelBuilder.coconutTree) {
        game.levelBuilder.imageHeight = game.coconutTree.height;
        game.levelBuilder.imageWidth = game.coconutTree.width;
        game.levelBuilder.sX = game.coconutTree.sX;
        game.levelBuilder.sY = game.coconutTree.sY;
        game.levelBuilder.image.src = game.coconutTree.image.src;
        game.levelBuilder.canDraw = true;
        game.levelBuilder.source = game.coconutTree.position;
        game.levelBuilder.coconutTree = true;
      } else {
        game.coconutTree.position[5] = {};
        game.levelBuilder.coconutTree = false;
        game.levelBuilder.canDraw = false;
      }
    }
  }

  monkey(xmouse, ymouse) {
    const distance = Math.sqrt(
      (xmouse - this.monkeyX) * (xmouse - this.monkeyX) +
        (ymouse - this.monkeyY) * (ymouse - this.monkeyY)
    );
    if (distance < this.radius) {
      if (!game.levelBuilder.monkey) {
        game.monkey.canPlay = false;
        game.levelBuilder.imageHeight = game.monkey.height;
        game.levelBuilder.imageWidth = game.monkey.width;
        game.levelBuilder.sX = game.monkey.sX;
        game.levelBuilder.sY = game.monkey.sY;
        game.levelBuilder.image.src = game.monkey.monkeyImage.src;
        game.levelBuilder.canDraw = true;
        game.levelBuilder.source = game.monkey.position;
        game.levelBuilder.monkey = true;
      } else {
        game.monkey.position[5] = {};
        game.levelBuilder.monkey = false;
        game.levelBuilder.canDraw = false;
      }
    }
  }
}
