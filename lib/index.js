const Game = require('./Game.js');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var game = new Game(canvas, context, 800, 600);


canvas.addEventListener('click', startGame);

function startGame() {
  canvas.removeEventListener('click', startGame);
  game.startGame();
}

  