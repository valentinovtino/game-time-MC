const Game = require('./Game.js');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var game = new Game(canvas, context, 800, 600);
var resetButton = document.querySelector('.reset-button');

canvas.addEventListener('click', startGame);
canvas.addEventListener('mousedown', mousePosition);
canvas.addEventListener('click', moveLevel);
resetButton.addEventListener('click', resetGame);


function startGame() {
  canvas.style.backgroundImage = "url('../Images/gameBackground.png')"
  canvas.removeEventListener('click', startGame);
  game.startGame();
}

function mousePosition(event) {
  var rect = canvas.getBoundingClientRect();
  let mouse = {
    userTargetX: event.clientX - rect.left,
    userTargetY: event.clientY - rect.top,
  }

  game.userAttack(mouse)
} 

function moveLevel() {
  if (game.level === 2) {
    canvas.removeEventListener('click', moveLevel);
    game.levelBeaten = false;
    
    game.startGame();
  }
}

function resetGame() {
  window.location.reload(true);
}

