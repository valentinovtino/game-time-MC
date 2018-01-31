const Game = require('./Game.js');
const Missile = require('./Missile.js');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var game = new Game(canvas, context, 800, 600);

canvas.addEventListener('click', startGame);
canvas.addEventListener('mousedown', mousePosition);
// canvas.addEventListener('click', Missile.playerShoot);

function startGame() {
  canvas.removeEventListener('click', startGame);
  game.startGame();
}

 function mousePosition(event) {
    var rect = canvas.getBoundingClientRect();
    let mouse = {
      userTargetX: event.clientX - rect.left,
      userTargetY: event.clientY - rect.top,
    }
    

    // console.log(mouse)

    game.userAttack(mouse)

  } 



