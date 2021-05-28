let playButton = document.getElementById("play");

let levelDiv = document.getElementById("level-area");
let howToDiv = document.getElementById("how-to-play");
let menuDiv = document.getElementById("menu");
let menuArea = document.getElementById("menu-area");

function play() {
  game.state = inGame;
  game.sound.spawn.play();
}

function levelBackButton() {
  levelDiv.style.display = "none";
  menuArea.style.display = "block";
}

function backButton() {
  howToDiv.style.display = "none";
  menuArea.style.display = "block";
}

function levelButton() {
  levelDiv.style.display = "block";
  menuArea.style.display = "none";
}

function howToPlay() {
  howToDiv.style.display = "block";
  menuArea.style.display = "none";
}

function levelOne() {
  game.level = 0;
  game.state = inGame;
  levelDiv.style.display = "none";
  menuArea.style.display = "block";
  game.sound.spawn.play();
}

function levelTwo() {
  game.level = 1;
  game.state = inGame;
  levelDiv.style.display = "none";
  menuArea.style.display = "block";
  game.sound.spawn.play();
}
function levelThree() {
  game.level = 2;
  game.state = inGame;
  levelDiv.style.display = "none";
  menuArea.style.display = "block";
  game.sound.spawn.play();
}
function levelFour() {
  game.level = 3;
  game.state = inGame;
  levelDiv.style.display = "none";
  menuArea.style.display = "block";
  game.sound.spawn.play();
}

function levelFive() {
  game.level = 4;
  game.state = inGame;
  levelDiv.style.display = "none";
  menuArea.style.display = "block";
  game.sound.spawn.play();
}

function editor() {
  game.state = 3;
}
