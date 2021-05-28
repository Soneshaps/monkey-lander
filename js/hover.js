let playButton = document.getElementById("play");

let levelDiv = document.getElementById("level-area");
let howToDiv = document.getElementById("how-to-play");
let menuDiv = document.getElementById("menu");
let menuArea = document.getElementById("menu-area");

function play() {
  game.state = 1;
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
  game.state = 1;
  levelDiv.style.display = "none";
  menuArea.style.display = "block";
}

function levelTwo() {
  game.level = 1;
  game.state = 1;
  levelDiv.style.display = "none";
  menuArea.style.display = "block";
}
function levelThree() {
  game.level = 2;
  game.state = 1;
  levelDiv.style.display = "none";
  menuArea.style.display = "block";
}
function levelFour() {
  game.level = 3;
  game.state = 1;
  levelDiv.style.display = "none";
  menuArea.style.display = "block";
}

function levelFive() {
  game.level = 4;
  game.state = 1;
  levelDiv.style.display = "none";
  menuArea.style.display = "block";
}

function editor() {
  game.state = 3;
}
