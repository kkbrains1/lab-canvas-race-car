class Obstacles {
  constructor (game) {
    this.game = game;
    this.context = this.game.context;
    this.x = 0;
    this.y = 0;
    this.width = 100;
    this.height = 25;
  };



  draw() {
    this.context.fillStyle = '#870007';
    this.width = Math.floor(Math.random() * (this.game.$canvas.width - 2 * this.game.car.width));
    this.context.fillRect(this.x, this.y, this.width, this.height);

  } ;

};