

class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = $canvas.getContext('2d');

    this.background = new Background(this);
    this.car = new Car(this);
    this.obstacles = new Obstacles(this);
    
  }

  start () {
    this.draw();
    this.createObstacles();
  }

  clearScreen () {
    this.context.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
  }

  createObstacles() {
    this.obstacles.draw();
  }

  draw () {
    this.clearScreen();

    this.background.draw();
    this.car.draw();
    //this.obstacles.draw();
  }

}