const $canvas = document.querySelector('canvas');

const game = new Game($canvas);

const $buttonStart = document.getElementById('start-button');

$buttonStart.addEventListener('click', () => {
  game.start();
});

//game.draw();

window.addEventListener('keydown', (event) => {
  // Stop the default behavior (moving the screen to the left/up/right/down)
  event.preventDefault();

  // React based on the key pressed
  switch (event.keyCode) {
    case 37:
      game.car.moveLeft();
      game.draw();
      console.log('left');
      break;
    case 39:
      game.car.moveRight();
      game.draw();
      console.log('right');
      break;
  }
});



