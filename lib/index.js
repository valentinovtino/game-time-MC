var Block = require('./Block.js');
var Enemy = require('./Enemy.js');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var block1 = new Block(10, 580, 10, 10);
var block2 = new Block(780, 580, 10, 10);

var blocks = [ block1, block2 ]; 


    var Enemies = [];

function createEnemies(canvas) {
  for (var i = 0; i < 16; i++) {
    var x = 30 + (i % 16) * 30;
    var y = 30 + (i % 2) * 30;

    this.enemy = new Enemy(x, y, 50, 25);

    Enemies.push(this.enemy)
    
  }
  return Enemies;
} 

createEnemies()

console.log('Enemy ' + Enemies)

function gameLoop () {


  Enemies.forEach((enemy) => {
    enemy.erase(context).draw(context);
  })

  blocks.forEach((block)=> {
    
      block.erase(context).draw(context);
    
  })

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

