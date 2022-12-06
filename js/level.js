let f1 = new Fruit();
let f2 = new Fruit();
let f3 = new Fruit();
let f4 = new Fruit();
let f5 = new Fruit();
let f6 = new Fruit();
let f7 = new Fruit();
let f8 = new Fruit();
let f9 = new Fruit();
let f10 = new Fruit();
let f11 = new Fruit();
let f12 = new Fruit();
class Level {
  update(ctx) {
    canvas.style.display = "block";
    game.gameClock += 1;
    game.background.update(ctx);
    game.checkBorderCollision();

    if (game.level === 0) {
      f1.update(ctx, 430, 250);
    }
    if (game.level === 1) {
      f2.update(ctx, 550, 300);
      f3.update(ctx, 350, 300);
      game.cliffLeft.update(ctx);
      game.cliffRight.update(ctx);
    }
    if (game.level === 2) {
      f4.update(ctx, 880, 150);
      f5.update(ctx, 670, 350);
      f6.update(ctx, 350, 350);
      game.ropeReversed.update(ctx);
      game.headOnSpike.update(ctx);
      game.coconutTree.update(ctx);
    }
    if (game.level === 3) {
      f7.update(ctx, 500, 60);
      f8.update(ctx, 850, 250);
      f9.update(ctx, 900, 450);
      game.bigCliff.update(ctx);
      game.rope.update(ctx);
      game.coconutTree.update(ctx);
    }
    if (game.level === 4) {
      f10.update(ctx, 250, 390);
      f11.update(ctx, 580, 360);
      f12.update(ctx, 650, 220);
      game.coconutTree.update(ctx);
      game.headOnSpikeReverse.update(ctx);
      game.rock.update(ctx);
      game.bigRock.update(ctx);
    }
    game.monkeyLife.update(ctx);
    game.fuel.update(ctx);
    game.score.update(ctx);
    game.banana.update(ctx);
    game.bananaLeft.update(ctx);
    game.monkey.update(ctx);

    if (game.gameClock % 10 === 0) {
      game.banana.hang();
    }
    //after collecting all bananas
    if (game.banana.bananaLeftToCollect === 0) {
      game.landingSpace.update(ctx);
      game.landingSpace.landingCollision(game.monkey, game.landingSpace);
    }

    if (paused) {
      game.pause.update(ctx);
    }
  }
}
