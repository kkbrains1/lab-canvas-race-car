class Car {
  constructor(game) {
    this.game = game;
    this.context = this.game.context;
    this.x = this.game.$canvas.width / 2;
    this.y = this.game.$canvas.height  - (this.game.$canvas.height / 6);
    this.width = 40;
    this.height = 100;
    this.carImage = new Image();
    this.carImage.src = '/images/car.png';
    //this.backgroundImage.width = this.game.$canvas.width;
  };

  moveRight() {
    if (this.x > 0 && this.x < this.game.$canvas.width) {
      this.x += 10;
      console.log('x and y' , this.x, this.y);
    }
  }

  moveLeft() {
    if (this.x > 0 && this.x < this.game.$canvas.width) {
      this.x -=10;
    } 
    //console.log('x and y' , this.x, this.y);
  }


  draw() {
    //context.save();

    this.carImage.addEventListener('load', () => {
      this.context.drawImage(this.carImage, this.x - (this.width / 2), this.y, this.width, this.height);
      //this.context.drawImage(this.backgroundImage, 0, 0, this.x, this.y);
    })

    this.context.drawImage(this.carImage, this.x - (this.width / 2), this.y, this.width, this.height);
    console.dir(this.carImage);
    
    //context.restore();

  };
  
}