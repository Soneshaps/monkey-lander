document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowUp") {
    game.fuel.decreaseFuel();
    uppressed = true;
  }
  if (e.key === "ArrowRight") {
    game.fuel.decreaseFuel();
    rightpressed = true;
  }
  if (e.key === "ArrowLeft") {
    game.fuel.decreaseFuel();
    leftpressed = true;
  }
  if (e.keyCode === 80) {
    if (game.monkey.canPlay) {
      game.monkey.canPlay = false;
      paused = true;
    } else {
      game.monkey.canPlay = true;
      paused = false;
    }
  }
});

document.addEventListener("keyup", function (e) {
  game.monkey.static();
  leftpressed = false;
  rightpressed = false;
  uppressed = false;
});

canvas.addEventListener("click", function (event) {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  if (game.levelBuilder.canDraw) {
    game.levelBuilder.drawImage(x, y);
  }
  game.levelBuilder.menu.exit(x, y);
  game.levelBuilder.menu.coconut(x, y);
  game.levelBuilder.menu.monkey(x, y);
  game.exit.quit(x, y);
});

canvas.addEventListener("mousemove", function (event) {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  mx = event.clientX;
  my = event.clientY;
});
