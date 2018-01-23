var Block = require('./Block.js');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var block1 = new Block(50, 50, 10, 10);
var block2 = new Block(150, 50, 10, 10);

var blocks = [ block1, block2 ]; 

function gameLoop () {

  blocks.forEach((block)=> {
    if ( block.x < canvas.width) {
      block.erase(context).move().draw(context);
    }  
  })

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

canvas.addEventListener('click', function (event) {
  var block = new Block (event.offsetX, event.offsetY, 10, 10)
  blocks.push(block)
});