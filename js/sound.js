class Sound {
  constructor() {
    this.start = new Audio("./audio/glide.mp3");
    this.startUp = new Audio("./audio/glide1.mp3");
    this.dead = new Audio("./audio/dead.mp3");
    this.eat = new Audio("./audio/eat.mp3");
    this.spawn = new Audio("./audio/spawn.mp3");
    this.landPop = new Audio("./audio/landpop.mp3");
    this.points = new Audio("./audio/points.mp3");
    this.victory = new Audio("./audio/victory.mp3");
    this.victory.loop = false;
    this.landPop.loop = false;
  }
}
