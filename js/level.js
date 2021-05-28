class Level {
  constructor() {}
  update(ctx) {
    canvas.style.display = "block";
    game.gameClock += 1;
    game.background.update(ctx);
    game.fruit.update(ctx);
    game.checkBorderCollision();
    if (game.level === 1) {
      game.cliffLeft.update(ctx);
      game.cliffRight.update(ctx);
    }
    if (game.level === 2) {
      game.ropeReversed.update(ctx);
      game.headOnSpike.update(ctx);
      game.coconutTree.update(ctx);
    }
    if (game.level === 3) {
      game.bigCliff.update(ctx);
      game.rope.update(ctx);
      game.coconutTree.update(ctx);
    }
    if (game.level === 4) {
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
