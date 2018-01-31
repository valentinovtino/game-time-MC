const Game = require('./Game.js');
const Missile = require('./Missile.js');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var game = new Game(canvas, context, 800, 600);

canvas.addEventListener('click', startGame);
canvas.addEventListener('mousedown', mousePosition);

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
    // game.exploded()
    // game.populateAttack();
  } 



