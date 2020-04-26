class Background {
  constructor(game) {
    this.game = game;
    this.x = this.game.$canvas.width;
    this.y = this.game.$canvas.height;
    this.context = this.game.context;
    this.backgroundImage = new Image();
    this.backgroundImage.src = '/images/road.png';
    //this.backgroundImage.width = this.game.$canvas.width;
  };

/*   loop() {
    //const context = this.game.context;

    //context.drawImage(this.backgroundImage, 0, this.y);
    //this.y--;
    //const height = this.backgroundImage.height ;
    //this.draw();
    console.dir(this.backgroundImage.height);
    console.log(this.backgroundImage, this.backgroundImage.width, this.backgroundImage.height, this.y);
    
    if (this.backgroundImage.height) {
      this.y = this.y % this.backgroundImage.height;
    }

    this.game.clearScreen();
    this.draw();
    setTimeout(this.loop, 1000 / 240);
  }; */

  draw() {
    this.backgroundImage.addEventListener('load', () => {
      this.context.drawImage(this.backgroundImage, 0, 0, this.x, this.y);
    })

    this.context.drawImage(this.backgroundImage, 0, 0, this.x, this.y);
    //this.context.drawImage(this.backgroundImage, 0, this.y + this.backgroundImage.height);
    //context.drawImage(this.backgroundImage, this.x + this.backgroundImage.width * 2, 0);
  };
  
}