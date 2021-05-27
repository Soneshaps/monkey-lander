let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
canvas.width = 993;
canvas.height = 530;
let canvasHeight = canvas.clientHeight;
let canvasWidth = canvas.clientWidth;

let score = 0;
let highscore = localStorage.getItem("highscore") || 0;
//Sprites Images

//Background
let backgroundImage = new Image();
backgroundImage.src = "images/background.png";

let leftpressed, rightpressed, uppressed;
let paused = false;

let mx = 0,
  my = 0;
